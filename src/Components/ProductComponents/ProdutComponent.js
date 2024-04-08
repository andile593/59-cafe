import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProductComponent.css';

const Product = ({ products }) => {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        const productDetailUrl = `/product/${productId}`;
        navigate(productDetailUrl);
    };

    // Split the products into two sets for two different Swipers
    const productsForSwiper1 = products ? products.slice(0, products.length / 2) : [];
    const productsForSwiper2 = products ? products.slice(products.length / 2) : [];

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {productsForSwiper1.map(product => (
                    <SwiperSlide key={product.id} onClick={() => handleProductClick(product.id)}>
                        <div className="product">
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h2 className="product-bold">{product.name}</h2>
                            <div className='reviews-wrapper'>
                                <svg className='review-icon' fill="#855C3F" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                                <p>(3,5)</p>
                                <p>50,1k</p>
                                <p>Reviews</p>
                            </div>
                            <h2 className="product-bold">R{product.amount},00</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                slidesPerView={2}
                spaceBetween={10} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {productsForSwiper2.map(product => (
                    <SwiperSlide key={product.id} onClick={() => handleProductClick(product.id)}>
                        <div className="product">
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h2 className="product-bold">{product.name}</h2>
                            <div className='reviews-wrapper'>
                                <svg className='review-icon' fill="#855C3F" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                                <p>(3,5)</p>
                                <p>50,1k</p>
                                <p>Reviews</p>
                            </div>
                            <h2 className="product-bold">R{product.amount},00</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Product;
