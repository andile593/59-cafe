import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { collection, addDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../../../firebase/firebase';
import ProductComponent from "../../../Components/ProductComponents/ProdutComponent"
import { getProducts } from '../productService';
import './productdetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const cartCollectionRef = collection(db, 'cart');

    const [products, setProducts] = useState(null)
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
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
    }, [productId, navigate]);




    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            setProducts(productsData)
        };
        fetchData();
    }, []);

    const handleAddToCart = async () => {
        if (!product) return;
        const cartItem = {
            productId: productId,
            quantity: quantity,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.amount
        };

        console.log(cartItem);

        try {

            const cartQuerySnapshot = await getDocs(query(collection(db, 'cart'), where('productId', '==', productId)));
            if (!cartQuerySnapshot.empty) {
                console.log('Product already exists in cart');
                navigate('/cart')
                return;
            }

            await addDoc(cartCollectionRef, cartItem);
            console.log('Product added to cart successfully');
            navigate('/cart');
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    if (!product) {
        return <div className='loading-container'>Loading...</div>;
    }

    return (
        <>
            <div className="product-detail">
                <img src={product.image} alt={product.name} />
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
