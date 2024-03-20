import Brownies from '../../../assets/images/packed-brownies.jpg'
import Cappuccino from '../../../assets/images/cappuccino.jpg'
import Buns from '../../../assets/images/Buns.jpg'
import "./ProductSection.css"

const ProductSection = () => {
    return (
        <div className="products-section ">
            <h1>Products</h1>
            <p>We offer a wide variety of baked goods to satisfy every craving.</p>
            <div className="product-wrapper">
                <div className="product">
                    <img src={Brownies} alt="A box of packed cookies" />
                    <h2>Packed Brownies</h2>
                    <p>10 Brownies inside each packet.</p>
                    <h2>R120,00</h2>
                    <button>Order</button>
                </div>
                <div className="product">
                    <img src={Cappuccino} alt="Two cups of cappuccino" />
                    <h2>Cappuccino</h2>
                    <p>A cappuccino plus one bun.</p>
                    <h2>R80,00</h2>
                    <button>Order</button>
                </div>
                <div className="product">
                    <img src={Buns} alt="Buns" />
                    <h2>Buns</h2>
                    <p>1 Packet of buns</p>
                    <h2>R60,00</h2>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}

export default ProductSection