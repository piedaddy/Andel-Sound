import React from "react";
import "./Home.css";


export default function Home({inEng}) {

  return (
  <div className="intro" id="home">
    <h1>Andel Sound</h1>
    <h3>{inEng ? 'MUSIC AND FILM STUDIO' : 'HUDEBNÍ A FILMOVÉ STUDIO'}</h3>
  </div>  
  )
}