import React from "react";
import "./References.scss";

export default function MusicProdRef({ inEng }) {
  return (
    <>
      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="gaby"
        ></img>
        <p className="reference_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="reference_name">Gaby Wildfeuer</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="gaby"
        ></img>
        <p className="reference_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="reference_name">Gaby Wildfeuer</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="gaby"
        ></img>
        <p className="reference_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="reference_name">Gaby Wildfeuer</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="gaby"
        ></img>
        <p className="reference_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="reference_name">Gaby Wildfeuer</p>
      </div>
    </>
  );
}
