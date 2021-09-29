import React from "react";
import "./Photos.scss";

export default function Photos({ inEng }) {
  // id="carouselExampleIndicators"
  return (
    <section id="photos" className="photos">
      <h2>{inEng ? "PHOTOS" : "FOTKY"}</h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-2.jpg")}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-3.jpg")}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-4.jpg")}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-5.jpg")}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-6.jpg")}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-7.jpg")}
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-8.jpg")}
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-9.jpg")}
              alt="Sixth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-10.jpg")}
              alt="Seventh slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi-11.jpg")}
              alt="Eighth slide"
            />
          </div>{" "}
          <div className="carousel-item">
            <img
              className="d-block w-80"
              src={require("../../photos/AndelSound_PROMO_2021_hi.jpg")}
              alt="Ninth slide"
            />
          </div>{" "}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
