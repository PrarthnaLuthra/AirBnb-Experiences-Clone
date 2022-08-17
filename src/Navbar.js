import React from "react";
import airbnbLogo from "./images/airbnb_logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} className="navlogo" />
    </nav>
  );
}
