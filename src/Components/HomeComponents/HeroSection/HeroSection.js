import { Link } from "react-router-dom";
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="overlay"></div>
            <h1>
                Indulge in the Sweetest Treats: Discover the Art of Baking at 59 Cafe
            </h1>
            <p>
                Satisfy Your Cravings with Our Delectable Selection of Cakes, Cookies,
                and More
            </p>
            <Link to="/products">Order</Link>
        </div>
    )
}

export default HeroSection