import { createSelector } from "reselect";
import moment from "moment";

const getUserRequest = state => state.user.request;
const getTickets = state => state.searchPage.tickets.items;

const ticketsSearchSelector = createSelector(
  [getUserRequest, getTickets],
  (UserRequest, Tickets) => {
    const fromTickets = Tickets.filter(
      ticket =>
        ticket.fromCountry == UserRequest.from &&
        moment(ticket.dateFrom)
          .startOf("day")

          .isSame(moment(UserRequest.departure).startOf("day"))
    );
    return fromTickets.filter(
      ticket2 =>
        ticket2.toCountry == UserRequest.to &&
        moment(ticket2.dateTo)
          .startOf("day")
          .isSame(moment(UserRequest.return).startOf("day"))
    );
  }
);

export default ticketsSearchSelector;
