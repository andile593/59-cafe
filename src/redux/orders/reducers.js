
import { orderTypes } from "./types";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderTypes.FETCH_ALL_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case orderTypes.SET_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;