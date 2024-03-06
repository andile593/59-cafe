import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/reducers";
import productsReducer from "./products/reducers";
import cartReducer from "./cart/reducers";
import ordersReducer from "./orders/reducers";

const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
