import { cartTypes } from "./cartTypes";

export const addToCart = (product) => ({
  type: cartTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
