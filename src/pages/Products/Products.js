import ProductComponent from '../../Components/ProductComponents/ProdutComponent';
import './products.css'

const Products = ({ products }) => {
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
