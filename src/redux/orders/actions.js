import { orderTypes } from "./types";
import { db } from "../firebase/firebase";

export const addNewOrder = (orderData) => async (dispatch) => {
  try {
    await db.collection("orders").add(orderData);
    dispatch(fetchAllOrders());
  } catch (error) {
    console.error("Error adding new order:", error);
  }
};

export const fetchAllOrders = () => async (dispatch) => {
  try {
    const ordersRef = db.collection("orders");
    const ordersSnapshot = await ordersRef.get();
    const ordersData = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setOrders(ordersData));
  } catch (error) {
    console.error("Error fetching all orders:", error);
  }
};

export const setOrders = (orders) => ({
  type: orderTypes.SET_ORDERS,
  payload: orders,
});

export const deleteOrder = (orderId) => async (dispatch) => {
  try {
    await db.collection("orders").doc(orderId).delete();
    dispatch(fetchAllOrders());
  } catch (error) {
    console.error("Error deleting order:", error);
  }
};
