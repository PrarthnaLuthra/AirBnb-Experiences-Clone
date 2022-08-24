import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Header from "./Header";
import Card from "./Card";
import Activities from "./Activities";
import data from "./data";
import Heading from "./Heading";
import CardImg1 from "./images/Card1.png";
import CardImg2 from "./images/Card2.png";
import CardImg3 from "./images/Card3.png";

function App() {
  const activity = data.map((item) => {
    return <Activities Key={item.id} item={item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Header />

      <div className="Cards">
        <Card img={CardImg1} city="Delhi" />
        <Card img={CardImg2} city="Kerela" />
        <Card img={CardImg3} city="Mumbai" />
      </div>
      <Heading />
      <section className="activities-list">{activity}</section>
    </>
  );
}

export default App;
