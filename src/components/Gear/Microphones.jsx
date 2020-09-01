import React from "react";
import "../App.css";

export default function Microphones({ showMics }) {
  return (
    <div>
      {showMics ? (
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
          <li>Samson C01</li>{" "}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
