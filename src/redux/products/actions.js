import { productTypes } from "./types";
import { db } from "../../firebase/firebase";

export const addNewProduct = (productData) => async (dispatch) => {
  try {
    await db.collection("products").add(productData);
    dispatch(fetchAllProducts());
  } catch (error) {
    console.error("Error adding new product:", error);
  }
};

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const productsRef = db.collection("products");
    const productsSnapshot = await productsRef.get();
    const productsData = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setProducts(productsData));
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
};

export const setProducts = (products) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await db.collection("products").doc(productId).delete();
    dispatch(fetchAllProducts()); 
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};