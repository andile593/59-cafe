import { Link } from "react-router-dom"
import ProductItem from '../../pages/Products/ProductDetail/productdetail'

const Products = () => {
    
 return (
    <div className="products-container">
        <h2>Products</h2>
        <div className="products-wrapper">
            <p>map through the list of products from the db</p> 
            <ProductItem />
        </div>
        <div className="product-sidebar">
            <h3>Create a new product.</h3>
            <Link to='/create'>
                <svg>+</svg>
            </Link>
        </div>
    </div>
 )
}

export default Products