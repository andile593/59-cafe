import { productTypes } from "./types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;