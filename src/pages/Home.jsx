import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Checkout from "../components/Checkout";

const Home = () => {
  return (
    <>
      <Header />
      <Card />
      <Checkout />
      <Footer />
    </>
  );
};

export default Home;