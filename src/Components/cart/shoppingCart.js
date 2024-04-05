import React, { useState, useEffect } from 'react';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase/firebase";
import './shoppingCart.css'

const Cart = () => {
    const cartCollectionRef = collection(db, "cart");

    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        // Fetch cart items from Firestore
        const fetchCartItems = async () => {
            try {
                const cartCollection = await getDocs(cartCollectionRef);
                const items = cartCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCartItems(items);
                calculateTotalCost(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [cartCollectionRef]);

    const calculateTotalCost = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalCost(total);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedItems);
        calculateTotalCost(updatedItems);

        const cartDocRef = doc(cartCollectionRef, itemId);
        setDoc(cartDocRef, { quantity: newQuantity }, { merge: true })
            .then(() => console.log("Quantity updated successfully"))
            .catch(error => {
                console.error('Error updating quantity in Firestore:', error);
                // If there's an error, revert back to the previous state
                setCartItems(prevItems => prevItems.map(item => {
                    if (item.id === itemId) {
                        return { ...item, quantity: item.quantity };
                    }
                    return item;
                }));
            });
    };



return (
    <div className="cart-container">
        <h1 className="cart-title">Cart</h1>
        {cartItems.length === 0 ? (
            <div className="empty-cart">
                <p>Your cart is empty. Shop now!</p>
            </div>
        ) : (
            cartItems.map(item => (
                <div className="cartItem" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cartProps">
                        <h2>{item.name}</h2>
                        <p className='cartItem-description '>{item.description}</p>
                        <div className='quantity-element'>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <p className='productTotal'> R{item.price * item.quantity},00</p>
                    </div>
                </div>
            ))
        )}
        {cartItems.length > 0 && (
            <div className='cartSummary'>
                <h1 className='Summary-title'>Cart Summary</h1>
                <h2 className='product-overview'>Product Overview</h2>
                <h2 className='subtotal'>Subtotal</h2>
                {cartItems.map(item => (
                    <div className="item" key={item.id}>
                        <h2 className='productName'>{item.name} ({item.quantity})</h2>
                        <p className='productPrice'> R{item.price * item.quantity},00</p>
                    </div>
                ))}
                <span className='line'></span>
                <p className='total'>Total: R{totalCost},00</p>
                <button className='checkout-btn'>Checkout</button>
            </div>
        )}
    </div>
);
};

export default Cart;
