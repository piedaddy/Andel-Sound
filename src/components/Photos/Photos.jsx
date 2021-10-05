import React from "react";
import "./Photos.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Photos({ inEng }) {
  // id="carouselExampleIndicators"
  return (
    <section id="photos" className="photos">
      <h2>{inEng ? "PHOTOS" : "FOTKY"}</h2>

      <Splide
        options={{
          type: "loop",
          gap: "5rem",
          autoplay: true,
          //pauseOnHover: true,
          resetProgress: false,
          //  pagination: true,
          arrows: "slider",
        }}
      >
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-2.jpg")}
            alt="first room"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-3.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-4.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-5.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-6.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-7.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        {/* <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-8.jpg")}
            alt="second room 2"
          />
        </SplideSlide> */}
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-9.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-10.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi-11.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={require("../../photos/AndelSound_PROMO_2021_hi.jpg")}
            alt="second room 2"
          />
        </SplideSlide>
      </Splide>
    </section>
  );
}
