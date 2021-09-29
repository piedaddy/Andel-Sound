import React from "react";
import "./References.scss";

export default function MusicProdRef({ inEng }) {
  return (
    <>
      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="Rising Spirits"
        ></img>
        <p className="reference_description">
          Mixing session for single <i>Tvoj Usmev</i>
        </p>
        <p className="reference_name">Rising Spirits</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="Leaping Lena"
        ></img>
        <p className="reference_description">
          Music production, mix, and master for single <i>Where Are We Going</i>
        </p>
        <p className="reference_name">Leaping Lena</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="PJ Dokosh"
        ></img>
        <p className="reference_description">
          Recording and mix for song <i>Až Budeš</i>
        </p>
        <p className="reference_name">PJ Dokosh</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="Sirup"
        ></img>
        <p className="reference_description">
          Music production, mix, and master for single{" "}
          <i>Tvuj Fotr To Tak Chtel</i>
        </p>
        <p className="reference_name">Sirup</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/computer_1.JPG")}
          alt="PJ Dokosh"
        ></img>
        <p className="reference_description">
          Music production, mix, and master for single
          <i>Plameny</i>
        </p>
        <p className="reference_name">PJ Dokosh</p>
      </div>
    </>
  );
}
