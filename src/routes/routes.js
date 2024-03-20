import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../Components/cart/shoppingCart";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Create from "../pages/Products/Create/Create";
// import Settings from "../Components/Admin/Settings";
import Checkout from "../Components/cart/checkoutForm";
// import Admin from "../pages/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";
// import AdminProducts from "../Components/Admin/Products";
// import Orders from "../Components/Admin/Orders";
// import Customers from "../Components/Admin/Customers";


const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin-create" element={<Create />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* 
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-orders" element={<Orders />} />
        <Route path="/admin-customers" element={<Customers />} />
        <Route path="/admin-settings" element={<Settings />} /> */}
      </Routes>
    )
}

export default AppRoutes