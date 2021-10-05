import React from "react";
import "./About.scss";

export default function About({ inEng }) {
  const czechText1 =
    "Produkční a nahrávací studio v Praze na Andělu se zaměřuje na individuální projekty v oblasti hudební produkce a mluveného slova.";

  const czechText2 =
    "Kontaktujte nás na studio@andelsound.com s Vaším projektem, rádi se ozveme zpět s návrhem realizace a ceny.";

  const englishText1 =
    "We are a recording studio in the heart of Andel, Prague.";

  const englishText2 =
    "Andel Sound is focused on the full spectrum of music creation, from production to mixing and mastering. We also work with commercial projects, like voice overs.";

  const englishText3 =
    "Contact us via email with your individual project and we will get back to you with our proposal of the solution and the budget.";

  return (
    <section className="services_container" id="about">
      <div className="services">
        <h2>{inEng ? "ABOUT US" : "O NÁS"}</h2>
        <div className="text">
          <div className="text___partOne">
            <p>{inEng ? englishText1 : czechText1}</p>
            <p>{inEng ? englishText2 : ""}</p>
          </div>
          <div className="text___partTwo">
            <p>{inEng ? englishText3 : czechText2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
