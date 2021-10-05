import React from "react";
import "./References.scss";

export default function Commercial({ inEng }) {
  return (
    <>
      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/AlfaSilver.jpg")}
          alt="AlfaSilver logo"
        ></img>
        {/* <div className="reference__text"> */}
        <p className="reference_description">
          Voice Over pro independent company McShakespeare a produkt Alfa
          Silver.
        </p>
        <p className="reference_name">Alfa Silver</p>
        {/* </div> */}
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/preamps_1.JPG")}
          alt="Rádoby Nádoby Logo"
        ></img>
        {/* <div className="reference__text"> */}
        <p className="reference_description">
          Voice Over pro prezentační videa.
        </p>
        <p className="reference_name">Rádoby Nádoby</p>
        {/* </div> */}
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/preamps_1.JPG")}
          alt="Cisco Webex"
        ></img>
        <p className="reference_description">
          Voice Over spolupráce s independent company McShakespeare na projektu
          Cisco Webex
        </p>
        <p className="reference_name">Cisco Webex</p>
      </div>

      <div className="reference">
        <img
          className="reference_image"
          src={require("../../photos/preamps_1.JPG")}
          alt="Magic Hill Logo"
        ></img>
        <p className="reference_description">
          Reklamní spot pro školu Magic Hill
        </p>
        <p className="reference_name">Magic Hill</p>
      </div>
    </>
  );
}
