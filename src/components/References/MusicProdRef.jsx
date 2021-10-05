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
          Mixing session for single <b>Tvoj Usmev</b>
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
          Music production, mix, and master for single <b>Where Are We Going</b>
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
          Recording and mix for song <b>Až Budeš</b>
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
          <b>Tvuj Fotr To Tak Chtel</b>
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
          Music production, mix, and master for single <b>Plameny</b>
        </p>
        <p className="reference_name">PJ Dokosh</p>
      </div>
    </>
  );
}
