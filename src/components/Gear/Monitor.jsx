import React from "react";
import "../App.css";

export default function Monitor({ showMonitor }) {
  return (
    <div>
      {showMonitor ? (
        <ul>
          <li>Yamaha HS-8 Pair Sontronics STC-2</li>
          <li>Genelec 8020</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
