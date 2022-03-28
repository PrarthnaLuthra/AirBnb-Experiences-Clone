import React from "react";
// import Card1 from "./Card1.png"
// import star from "./star.png";

export default function Card(props){
    
    return(
        <div className="Card">
            <img src={props.img} className="CardImage"/>
            <span className="CardCity">{props.city}</span>

        </div>
    )
}