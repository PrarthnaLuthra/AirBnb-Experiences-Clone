import React from "react";
import mainimage from "./images/main_img.png";
import mainimage2 from "./images/main_img2.png";
import mainimage3 from "./images/main_img3.png";
import mainimage4 from "./images/main_img4.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img src={mainimage2} className="HeroImage" />
      <img src={mainimage4} className="HeroImage" />
      <img src={mainimage} className="HeroImage" />
      <img src={mainimage3} className="HeroImage" />
    </section>
  );
}
