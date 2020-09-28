import React, { useState } from "react";
import "./Gear.scss";
// import Microphones from "./Microphones";
// import Daw from "./Daw";
// import Interface from "./Interface";
// import Monitor from "./Monitor";
// import Preamps from "./Preamps";
// import Tape from "./Tape";

export default function Gear({ inEng }) {
  const [showGear, setShowGear] = useState(false);

  function handleShowGear() {
    setShowGear(!showGear);
  }
  return (
    <>
      <section id="gear" className="equiptment">
        <div className="title" onClick={handleShowGear}>
          <h2>{inEng ? "Equiptment" : "Vybavení"}</h2>
        </div>
        {showGear ? (
          <div className="gear_container">
            <div className="gear_container__1">
              <div className="gear">
                <h4>Thunderbolt Audio Interface</h4>
                <ul>
                  <li>Apollo x16</li>
                </ul>
              </div>
              <div className="gear">
                <h4>DAW</h4>
                <ul>
                  <li>Pro Tools</li>
                  <li>Logic X Pro</li>
                </ul>
              </div>

              <div className="gear">
                <h4>{inEng ? "Tape Recorder" : "Tape Recorder"}</h4>
                <ul>
                  <li>Fostex R8</li>
                </ul>
              </div>
              <div className="gear">
                <h4>{inEng ? "Monitors" : "Monitory"}</h4>
                <ul>
                  <li>Yamaha HS-8 Pair Sontronics STC-2</li>
                  <li>Genelec 8020</li>
                </ul>
              </div>
            </div>
            <div className="gear_container__2">
              <div className="gear">
                <h4>
                  {inEng
                    ? "Preamps and modulators"
                    : "Předzesilovače a modulátory"}
                </h4>
                <ul>
                  <li>Focusrite ISA One preamp</li>
                  <li>SPL Goldmike className A mit Tube</li>
                  <li>Focusrite ISA828</li>
                  <li>Avalon VT-737SP</li>
                  <li>KT-2A leveling amplifier</li>
                  <li>76-KT limiting amplifier</li>
                  <li>Ultra-Q PRO Behringer</li>
                  <li>2x WA-2A leveling amplifier</li>
                  <li>WA-412</li>
                  <li>286A Mic Preamp</li>
                </ul>
              </div>
              <div className="gear">
                <h4>{inEng ? "Microphones" : "Mikrofony"}</h4>
                <ul>
                  <li>EV RE-20</li>
                  <li>Telefunken AR-51</li>
                  <li>ADK A-48 Valve</li>
                  <li>Groove Tubes MD1b FET t.bone RB100</li>
                  <li>t.bone SC140</li>
                  <li>2x Warm Audio WA-87 </li>
                  <li>Neumann U 87 ai</li>
                  <li>Sennheiser e906</li>
                  <li>Warm Audio WA-84 pair</li>
                  <li>2x Sennheiser MD 421-II</li>
                  <li>4x Shure SM-57</li>
                  <li>Audix D6</li>
                  <li>2x Audio-technica ATH-M40x</li>
                  <li>Sennheiser e602</li>
                  <li>Samson C01</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p className="see-gear">
            {inEng ? "Click to see more" : "Kliknutím zobrazíte více"}
          </p>
        )}
      </section>
    </>
  );
}
