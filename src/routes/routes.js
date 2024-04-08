import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../Components/cart/ShoppingCart/shoppingCart";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail/productdetail";
import Create from "../pages/Products/Create/Create";
import Checkout from "../Components/cart/Checkout/checkoutForm";
import Login from '../Components/auth/LoginForm'
import SignUp from "../Components/auth/RegisterForm"

const AppRoutes = ({ cartItems, setCartItems, products, order, setOrder }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} setCartItems={setCartItems} setOrder={setOrder} />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products products={products} />} />
      <Route
        path="/product/:productId"
        element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} products={products} />}
      />
      <Route path="/create" element={<Create />} />
      <Route
        path="/checkout"
        element={<Checkout order={order} setOrder={setOrder} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
