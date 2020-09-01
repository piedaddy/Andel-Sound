import React from "react";
import "../App.css";

export default function Daw({ showDaw }) {
  return (
    <div>
      {showDaw ? (
        <ul>
          <li>Pro Tools</li>
          <li>Logic X Pro</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
