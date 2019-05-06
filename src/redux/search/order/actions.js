import { postOrder } from "../../../api/index";
import {
  BOOKING_ORDER_SUCCESS,
  BOOKING_ORDER_HAS_ERRORED
} from "../../search/actionTypes";

export const registerOrder = order => dispatch => {
  postOrder(order)
    .then(res => {
      dispatch(registerOrderSuccess(res));
    })
    .catch(err => {
      dispatch({
        type: BOOKING_ORDER_HAS_ERRORED,
        payload: err.response.data
      });
    });
};

export const registerOrderSuccess = data => {
  return {
    type: BOOKING_ORDER_SUCCESS,
    payload: {
      userId: data.id,
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      startTime: data.startTime,
      endTime: data.endTime,
      fromCountry: data.fromCountry,
      toCountry: data.toCountry,
      price: data.price,
      adult: data.adult
    }
  };
};
