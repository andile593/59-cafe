import { useState, useEffect } from "react";
import AppRoutes from "./routes/routes";
import NavBar from "./Components/common/Header/navBar";
import Footer from "./Components/common/Footer/webFooter";
import { getProducts } from "./pages/Products/productService";
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [order, setOrder] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <AppRoutes cartItems={cartItems} setCartItems={setCartItems} products={products} order={order} setOrder={setOrder}/>
      <Footer />
    </div>
  )
}


export default App;
