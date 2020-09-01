import React from "react";
import "../App.css";

export default function Tape({ showTape }) {
  return (
    <div>
      {showTape ? (
        <ul>
          <li>Fostex R8</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
