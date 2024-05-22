import React from "react";
import SwiperHero from "../components/SwiperHero";
import SliderProduct from "../components/home-component/SliderProduct";
import SliderFlashSale from "../components/home-component/SliderFlashSale";

const Home = () => {
  return (
    <>
      <SwiperHero />
      <div className="container px-3 mx-auto">
        <SliderProduct />
        <SliderFlashSale />
      </div>
    </>
  );
};

export default Home;