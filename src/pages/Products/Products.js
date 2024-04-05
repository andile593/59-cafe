import { useState, useEffect } from 'react'
import ProductComponent from '../../Components/ProductComponents/ProdutComponent';
import { getProducts } from './productService';
import './products.css'

const Products = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData)
    };
    fetchData();
  }, []);

  return (
    <div>
       {products === null ? (
        <div className='loading-container'>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="products-section">
          <h1>Products</h1>
          <ProductComponent products={products} />
        
        </div>
      )}
    </div>
  );
};

export default Products;
