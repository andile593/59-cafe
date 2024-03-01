import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBarComponent/navBar";
import Home from "./Components/HomeComponent/Home";
import About from "./Components/AboutComponent/About";
import Blogs from "./Components/BlogsComponent/Blogs";
import Cart from "./Components/CartComponent/Cart";
import Contact from "./Components/ContactComponent/Contact";
import Products from "./Components/ProductsComponent/Products";
import SignInAuth from "./Components/SignInComponent/signInAuth";
import SignUpAuth from "./Components/SignUpComponent/signUpAuth";
import Create from "./Components/CreateComponent/Create";
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
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/create" element={<Create />} />
            <Route path="/signup" element={<SignUpAuth />} />
            <Route path="/login" element={<SignInAuth />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
