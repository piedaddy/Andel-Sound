import React from "react";
import "../App.css";

export default function Preamps({ showPreamp}) {
  return (
    <div>
      {showPreamp ? (
        <ul>
          <li>Focusrite ISA One preamp</li>
          <li>SPL Goldmike Class A mit Tube</li>
          <li>Focusrite ISA828</li>
          <li>Avalon VT-737SP</li>
          <li>KT-2A leveling amplifier</li>
          <li>76-KT limiting amplifier</li>
          <li>Ultra-Q PRO Behringer</li>
          <li>2x WA-2A leveling amplifier</li>
          <li>WA-412</li>
          <li>286A Mic Preamp</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
