import { handleActions } from "redux-actions";
import {
  BOOKING_ORDER_SUCCESS,
  BOOKING_ORDER_HAS_ERRORED
} from "../../search/actionTypes";

function getInitialState() {
  return {
    orderData: null,
    error: null
  };
}

const order = handleActions(
  {
    [BOOKING_ORDER_SUCCESS]: (state, action) => ({
      ...state,
      orderData: action.orderData
    }),
    [BOOKING_ORDER_HAS_ERRORED]: (state, action) => ({
      ...state,
      error: action.payload,
      orderData: null
    })
  },
  getInitialState()
);

export default order;
