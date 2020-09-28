import React, { useState } from "react";
import MusicProdRef from "./MusicProdRef";
import Commercial from "./Commercial";
import VoiceOver from "./VoiceOver";
import "./References.scss";

export default function References({ inEng }) {
  const [shouldShowMusicProd, setShouldShowMusicProd] = useState(true);
  const [shouldShowCommercial, setShouldShowCommercial] = useState(false);
  const [shouldShowVoiceOver, setShouldShowVoiceOver] = useState(false);

  function showMusicProd() {
    setShouldShowVoiceOver(false);
    setShouldShowCommercial(false);
    setShouldShowMusicProd(true);
  }

  function showCommerical() {
    setShouldShowVoiceOver(false);
    setShouldShowMusicProd(false);
    setShouldShowCommercial(true);
  }

  function showVoiceOver() {
    setShouldShowCommercial(false);
    setShouldShowMusicProd(false);
    setShouldShowVoiceOver(true);
  }

  return (
    <section className="references" id="references">
      <h2>{inEng ? "References" : "Reference"}</h2>
      <div className="references_menu">
        <h5 className={`${shouldShowMusicProd ? "chosen" : ""}`} onClick={showMusicProd}>{inEng ? "Music" : "Hudba"}</h5>
        <h5 className={`${shouldShowCommercial ? "chosen" : ""}`} onClick={showCommerical}>{inEng ? "Commercial" : "Komerční"}</h5>
      </div>
      {/* <hr></hr> */}
      <div className="references_container">
        {shouldShowMusicProd ? <MusicProdRef /> : ""}
        {shouldShowCommercial ? <Commercial /> : ""}
      </div>
    </section>
  );
}
