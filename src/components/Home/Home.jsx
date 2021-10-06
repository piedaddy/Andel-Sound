import React from "react";
import "./Home.scss";

export default function Home({ inEng }) {
  return (
    <div className="intro" id="home">
      <div className="images">
        <img
          src={require("../../photos/AndelSound_PROMO_2021_hi-4.jpg")}
          alt="Andel Sound Logo"
        />

        <img src={require("../../photos/bad_as.png")} alt="Andel Sound Logo" />
      </div>
    </div>
  );
}
