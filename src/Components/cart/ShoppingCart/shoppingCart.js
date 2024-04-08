import { useState, useEffect } from 'react';
import './shoppingCart.css';
import { auth } from '../../../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';

const Cart = ({ setCartItems, setOrder }) => {
    const navigate = useNavigate()
    const user = auth.currentUser

    const [cartItems, setLocalCartItems] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setLocalCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const calculateTotalCost = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    const handleQuantityChange = (productId, newQuantity) => {
        const updatedItems = cartItems.map(item => {
            if (item.productId === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setLocalCartItems(updatedItems);
    };

    const handleDeleteItem = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.productId !== productId);
        setLocalCartItems(updatedCartItems);
    };

    const handleCheckout = async () => {
        if (!user) {
            // Handle case where user is not authenticated
            navigate('/login')
            console.log('User not authenticated');
            return;
        }
        console.log('the user exists', user);
        setLoading(true);

        try {
            // Combine user ID with cart items
            const totalCost = calculateTotalCost(cartItems)
            const order = {
                userId: user.uid,
                cartItems: cartItems,
                total: totalCost

            };

            setOrder(order);
            setCartItems([]);
            
            navigate('/checkout');
        } catch (error) {
            console.error('Error creating order:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link className="shop-btn" to="/products"> Shop now!</Link>
                </div>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div className="cartItem" key={item.productId}>
                            <img src={item.image} alt={item.name} />
                            <div className="cartProps">
                                <h2>{item.name}</h2>
                                <p className='cartItem-description '>{item.description}</p>
                                <div className='quantity-element'>
                                    <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}>+</button>
                                </div>
                                <p className='productTotal'> R{item.price * item.quantity},00</p>
                                <button className="delete-icon" onClick={() => handleDeleteItem(item.productId)}>X</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {cartItems.length > 0 && (
                <div className='cartSummary'>
                    <h1 className='Summary-title'>Cart Summary</h1>
                    <h2 className='product-overview'>Product Overview</h2>
                    <h2 className='subtotal'>Subtotal</h2>
                    {cartItems.map(item => (
                        <div className="item" key={item.productId}>
                            <h2 className='productName'>{item.name} ({item.quantity})</h2>
                            <p className='productPrice'> R{item.price * item.quantity},00</p>
                        </div>
                    ))}
                    <span className='line'></span>
                    <p className='total'>Total: R{calculateTotalCost(cartItems)},00</p>
                    <button className='checkout-btn' onClick={handleCheckout} disabled={loading}>{loading ? 'Processing...' : 'Checkout'}</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
