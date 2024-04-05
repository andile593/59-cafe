import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../Components/cart/shoppingCart";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail/productdetail";
import Create from "../pages/Products/Create/Create";
import Checkout from "../Components/cart/checkoutForm";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<ProductDetail/> } />
      <Route path="/admin-create" element={<Create />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default AppRoutes