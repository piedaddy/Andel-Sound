import React, { useState } from "react";
import MusicProdRef from "./MusicProdRef";
import Mixing from "./Mixing";
import VoiceOver from "./VoiceOver";
import "./References.scss";

export default function References({ inEng }) {
  const [shouldShowMusicProd, setShouldShowMusicProd] = useState(true);
  const [shouldShowMixing, setShouldShowMixing] = useState(false);
  const [shouldShowVoiceOver, setShouldShowVoiceOver] = useState(false);

  function showMusicProd() {
    setShouldShowVoiceOver(false);
    setShouldShowMixing(false);
    setShouldShowMusicProd(true);
  }

  function showMixing() {
    setShouldShowVoiceOver(false);
    setShouldShowMusicProd(false);
    setShouldShowMixing(true);
  }

  function showVoiceOver() {
    setShouldShowMixing(false);
    setShouldShowMusicProd(false);
    setShouldShowVoiceOver(true);
  }

  return (
    <section className="references" id="references">
      <h2>REFERENCES</h2>
      <div className="references_menu">
        <h5 className={`${shouldShowMusicProd ? "chosen" : ""}`} onClick={showMusicProd}>MUSIC PRODUCTION</h5>
        <h5 className={`${shouldShowMixing ? "chosen" : ""}`} onClick={showMixing}>MIXING</h5>
        <h5 className={`${shouldShowVoiceOver ? "chosen" : ""}`} onClick={showVoiceOver}>VOICE OVER</h5>
      </div>
      <hr></hr>
      <div className="references_container">
        {shouldShowMusicProd ? <MusicProdRef /> : ""}
        {shouldShowMixing ? <Mixing /> : ""}
        {shouldShowVoiceOver ? <VoiceOver /> : ""}
      </div>
    </section>
  );
}
