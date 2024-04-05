import React from "react";
import HeroSection from "../../Components/HomeComponents/HeroSection/HeroSection";
import AboutSection from "../../Components/HomeComponents/AboutSection/AboutSection";
import Products from "../Products/Products";
import BlogsSection from "../../Components/HomeComponents/BlogsSection/BlogsSection";



const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products/>
      <BlogsSection />      
    </>
  );
};

export default Home;
