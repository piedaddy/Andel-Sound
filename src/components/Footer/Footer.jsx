import React from "react";
import "./Footer.scss";

export default function Footer({ inEng }) {
  return (
    <footer id="footer" className="footer">
      <p>
        {inEng ? "Designed and created by" : "Navrhla a vytvořila"}{" "}
        <a
          href="https://www.linkedin.com/in/gabrielle-wildfeuer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabrielle Wildfeuer
        </a>
      </p>
    </footer>
  );
}
