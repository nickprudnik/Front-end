import { createSelector } from "reselect";
import moment from "moment";

const getUserRequest = state => state.user.request;
const getTickets = state => state.searchPage.tickets.items;

const ticketsSearchSelector = createSelector(
  [getUserRequest, getTickets],
  (UserRequest, Tickets) => {
    let fromTickets = Tickets.filter(
      ticket =>
        ticket.fromCountry == UserRequest.from &&
        moment(ticket.dateFrom)
          .startOf("day")
          .isSame(moment(UserRequest.departure).startOf("day"))
    );
    fromTickets = fromTickets.filter(
      ticket2 =>
        ticket2.toCountry == UserRequest.to &&
        moment(ticket2.dateTo)
          .startOf("day")
          .isSame(moment(UserRequest.return).startOf("day"))
    );

    fromTickets = fromTickets.filter(
      ticket3 => ticket3.adult == UserRequest.adult
    );
    return fromTickets;
  }
);

export default ticketsSearchSelector;
