import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import ProductComponent from "../../../Components/ProductComponents/ProdutComponent"
import './productdetail.css';

const ProductDetail = ({ cartItems, setCartItems, products }) => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const productFromProps = products.find(product => product.id === productId);
        if (productFromProps) {
            setProduct(productFromProps);
        } else {
            // If the product with the given productId is not found in the products array, fetch it from Firestore
            console.log("The product doesn't")
            const fetchProduct = async () => {
                try {
                    const productDoc = await getDoc(doc(db, 'products', productId));
                    if (productDoc.exists()) {
                        setProduct(productDoc.data());
                    } else {
                        console.log('Product not found');
                        // Redirect to a not found page or handle the case accordingly
                        // navigate('/not-found');
                    }
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            };
            fetchProduct();
        }
    }, [productId, products, navigate]);

    const handleAddToCart = useCallback(async () => {
        if (!product) return;
        const cartItem = {
            productId: productId,
            quantity: quantity,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.amount
        };
    
        try {
            // Update the cart items state
            setCartItems(prevCartItems => [...prevCartItems, cartItem]);
            // Save the updated cart items to localStorage
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, cartItem]));
            console.log('Product added to cart successfully', [...cartItems, cartItem]); // Log the updated cartItems
            navigate('/cart');
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }, [product, productId, quantity, cartItems, setCartItems, navigate]);

    if (!product) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <>
            <div className="product-detail">
                <img src={product.image} alt={product.name} />
                <div className="product-props" >
                    <h1>{product.name}</h1>
                    <div className='reviews-container'>
                        <svg className='review-icon' fill="#855C3F" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                        <p>(3,5)</p>
                        <p className='num-people'>  50,1k</p>
                        <p> Reviews</p>
                    </div>
                    <p className='description'>{product.description}</p>
                    <h2 className='amount'>R{product.amount},00</h2>
                    <p>Free Shipping</p>
                    <button className='atc-btn' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>


            <div className='more-products-sections'>
                <h2>You may also like:</h2>
                <Link to='/products'>View more</Link>
                <div className='products-container'>
                    {products === null ? (
                        <div className='loading-container'>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <ProductComponent products={products} />
                    )}
                </div>
            </div>

        </>
    );
};

export default ProductDetail;
