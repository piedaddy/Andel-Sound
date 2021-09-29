import React from "react";
import "./Home.scss";

export default function Home({ inEng }) {
  return (
    <div className="intro" id="home">
      {/* <h1>Andel Sound</h1> */}
      <img src={require("../../photos/bad_as.png")} alt="Andel Sound Logo" />
      <h3>{inEng ? "MUSIC AND FILM STUDIO" : "HUDEBNÍ A FILMOVÉ STUDIO"}</h3>
    </div>
  );
}
