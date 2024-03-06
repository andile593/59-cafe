import { Link } from "react-router-dom"


const Products = () => {
    
 return (
    <div className="products-container">
        <h2>Products</h2>
        <div className="products-wrapper">
            /* map through the list of products from the db */        
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