import React from "react";
import "./Photos.css";

export default function Photos({inEng}) {

  // id="carouselExampleIndicators"
  return (
    <section id="photos" className="photos">
    <h2>{inEng ? "PHOTOS" : "FOTKY"}</h2>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-80" src={require("../../photos/computer_1.JPG")} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/computer_2.JPG")} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/control_room_1.JPG")} alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/control_room_3.JPG")} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/control_room_1.JPG")} alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/preamps_1.JPG")} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/recording_room_1.JPG")} alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/recording_room_2.JPG")} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={require("../../photos/soundbooth_1.JPG")} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
      
  </section>
  )
}