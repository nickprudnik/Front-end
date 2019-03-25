import { createSelector } from "reselect";
import moment from 'moment';

const getUserRequest = state => state.user.request;
const getTickets = state => state.searchPage.tickets.items;

const ticketsSearchSelector = createSelector([getUserRequest, getTickets],
  (UserRequest,Tickets) => {
    const fromTickets = Tickets.filter(ticket => ticket.fromCountry == UserRequest.from && moment(ticket.dateFrom).isSame(UserRequest.departure));
    return fromTickets.filter(ticket2 => ticket2.toCountry == UserRequest.to && moment(ticket2.dateTo).isSame(UserRequest.return));
});

export default ticketsSearchSelector;