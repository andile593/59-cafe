import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/firebase";
import './Home.css'

const Home = () => {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid)
            } else {
                console.log("user is logged out")
            }
          });
    }, [])

    return (
        <div>
            <div className="hero-section">
                
                <h1>Indulge in the Sweetest Treats: Discover the Art of Baking at 59 Cafe</h1>
                <p>Satisfy Your Cravings with Our Delectable Selection of Cakes, Cookies, and More</p>
                <Link to='/products'>Order</Link>
            </div>

            <div className="about-section">
                <h1>About us</h1>
                <p>Welcome to 59 Cafe, a family-owned bakery that has been serving the East Rand community for over 3 years. Our bakery was founded on a passion for baking delicious, high-quality treats using only the finest ingredients. We believe that baking is both an art and a science, and we take great pride in creating beautiful, delicious desserts that bring joy to our customers.</p>    
                <p>Our team is made up of skilled bakers and decorators who share a passion for all things sweet. We're constantly experimenting with new flavours and techniques, and we're committed to delivering the best possible experience to our customers.</p>
                <span></span>
            </div>   

            <div className='products-section '>
                <h1>Products</h1>
                <p>We offer a wide variety of baked goods to satisfy every craving.</p>
                <div></div>
            </div> 

        </div>
    )
}

export default Home