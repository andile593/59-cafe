import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/common/Header/navBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Cart from "./Components/cart/shoppingCart";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Create from "./Components/Admin/Create";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="webcontent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
