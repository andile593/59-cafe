import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'; // Import firebase
import 'firebase/firestore'; // Import Firestore

const ProductReviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    useEffect(() => {
        // Fetch reviews from Firestore
        const fetchReviews = async () => {
            try {
                const reviewsCollection = await firebase.firestore().collection('reviews')
                    .where('productId', '==', productId).get();
                const reviewsData = reviewsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setReviews(reviewsData);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [productId]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        if (!newReview.trim()) return;

        try {
            // Add review to Firestore
            await firebase.firestore().collection('reviews').add({
                productId: productId,
                reviewText: newReview,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            // Clear the input field after submission
            setNewReview('');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.reviewText}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmitReview}>
                <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)}></textarea>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ProductReviews;
