import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} className="CardImage" />
      <span className="CardCity">{props.city}</span>
    </div>
  );
}
