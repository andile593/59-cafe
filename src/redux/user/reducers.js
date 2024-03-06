
import { userTypes } from './types';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
      };
    case userTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case userTypes.SIGN_UP:
    case userTypes.SIGN_IN:
    case userTypes.SIGN_OUT:
    case userTypes.UPDATE_USER:
      return state; 
    default:
      return state;
  }
};

export default userReducer;