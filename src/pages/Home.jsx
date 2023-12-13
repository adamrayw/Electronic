import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Hero from "../components/Hero";
import SwiperHero from "../components/SwiperHero";

const Home = () => {
  return (
    <>
      <Header />
      <SwiperHero />
      <Card />
      <Footer />
    </>
  );
};

export default Home;