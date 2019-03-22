import { createSelector } from "reselect";

const getUserRequest = state => state.user.request;
const getTickets = state => state.searchPage.tickets.items;

const ticketsSearchSelector = createSelector([getUserRequest, getTickets],
  (UserRequest,Tickets) => {
    const fromTickets = Tickets.filter(ticket => ticket.fromCountry == UserRequest.from);
    return fromTickets.filter(ticket2 => ticket2.toCountry == UserRequest.to);
});

export default ticketsSearchSelector;
