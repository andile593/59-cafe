import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../Components/cart/shoppingCart";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Create from "../Components/Admin/Create";
import Settings from "../Components/Admin/Settings";
import Checkout from "../Components/cart/checkoutForm";
import Admin from "../pages/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";
import AdminProducts from "../Components/Admin/Products";
import Orders from "../Components/Admin/Orders";
import Customers from "../Components/Admin/Customers";

import ProtectedRoute from "./protectedRoute";

const Router = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Products />} />

    <Route
      path="/checkout"
      element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-create"
      element={
        <ProtectedRoute>
          <Create />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-products"
      element={
        <ProtectedRoute>
          <AdminProducts />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-orders"
      element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-customers"
      element={
        <ProtectedRoute>
          <Customers />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin-settings"
      element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      }
    />
  </Routes>;
};

export default Router;
