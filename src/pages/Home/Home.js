import React from "react";
import HeroSection from "../../Components/HomeComponents/HeroSection/HeroSection";
import AboutSection from "../../Components/HomeComponents/AboutSection/AboutSection";
import ProductSection from "../../Components/HomeComponents/ProductSection/ProductSection";
import BlogsSection from "../../Components/HomeComponents/BlogsSection/BlogsSection";



const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BlogsSection />      
    </>
  );
};

export default Home;
