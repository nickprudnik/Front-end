import { postOrder } from "../../../api/index";
import {
  BOOKING_ORDER_SUCCESS,
  BOOKING_ORDER_HAS_ERRORED
} from "../../search/actionTypes";

// export const registerOrder = historyOrder => dispatch => {
//   postOrder(historyOrder)
//     .then(res => {
//       dispatch(registerOrderSuccess(res));
//     })
//     .catch(err => {
//       dispatch({
//         type: BOOKING_ORDER_HAS_ERRORED,
//         payload: err.response.data
//       });
//     });
// };

export function registerOrder() {
  return dispatch => {
    postOrder().then(historyOrder =>
      dispatch(registerOrderSuccess(historyOrder.data))
    );
  };
}

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
