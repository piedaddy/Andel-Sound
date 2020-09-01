import React from "react";
import "../App.css";

export default function Interface({ showInt }) {
  return (
    <div>
      {showInt ? (
        <ul>
          <li>Apollo x16</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
