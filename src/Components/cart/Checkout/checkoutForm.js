import React, { useState } from 'react';
import './CheckoutForm.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom"

const CheckoutForm = ({ order, setOrder }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: ''
    });

    const orderCollectionRef = collection(db, "orders");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSave = {
            formData,
            order
        };

        try {
            await addDoc(orderCollectionRef, dataToSave)
            console.log('Data saved successfully.');
        } catch (error) {
            console.error("Error:", error);
        }
        localStorage.removeItem('cartItems');
        navigate('/')
    };

 

    return (
        <div className="checkout-form-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>

                <div className="cart-items-container">
                    <h3>Items</h3>
                    <div className='item'>
                        {order.cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: R{item.price},00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="order-total">
                        <p><strong>Total Order Amount:</strong> R{order.total},00</p>
                    </div>
                </div>

                <div className='form-content'>

                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
