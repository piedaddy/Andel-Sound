import React from "react";
import "./About.scss";

export default function About({ inEng }) {
  const czechText =
    "Produkční a nahrávací studio v Praze na Andělu se zaměřuje na individuální projekty v oblasti hudební produkce a mluveného slova. Kontaktujte nás na studio@andelsound.com s Vaším projektem, rádi se ozveme zpět s návrhem realizace a ceny.";
  const englishText =
    "We are a recording studio in the heart of Andel, Prague. Andel Sound is mainly focused on the full spectrum of music creation, from production to mixing and mastering. We also work with commercial projects, like voice overs. Contact us via email (( studio@andelsound.com )) with your individual project and we will get back to you with our proposal of the solution and the budget.";

  return (
    <section className="services_container" id="about">
      <div className="services">
        <h2>{inEng ? "About" : "O Nás"}</h2>
        <p>{inEng ? englishText : czechText}</p>
      </div>
    </section>
  );
}
