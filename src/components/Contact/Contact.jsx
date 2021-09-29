import React from "react";
import "./Contact.scss";
import "../Footer/Footer.scss";
import Iframe from "react-iframe";

export default function Contact({ inEng }) {
  return (
    <section id="contact" className="contacts">
      <h2>{inEng ? "Contact Us" : "Kontaktujte Nás"}</h2>

      <div className="contacts__container">
        <div className="contact_box">
          <div className="contact">
            <span>
              <strong>email:</strong> studio@andelsound.com
            </span>
            <br />
            <span>
              <strong>tel:</strong> +420-735-190-478
            </span>
            {/* <div className="contact-email">
              <span>{inEng ? "send an email now" : "nyní pošlete e-mail"}</span>
              <a
                href="mailto:gpwildfeuer@email.wm.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="far fa-envelope"
              >
                {" "}
              </a>
            </div> */}
          </div>
        </div>
        <div className="follow">
          {/* <h4>Follow us here</h4> */}
          <div className="icons">
            <div>
              <a
                href="mailto:studio@andelsound.com"
                target="_blank"
                rel="noopener noreferrer"
                className="far fa-envelope"
              >
                {" "}
              </a>
            </div>
            <div>
              <a
                className="fab fa-facebook-square"
                href="https://www.facebook.com/andelsound"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
            </div>
            <div>
              <a
                className="fab fa-instagram"
                href="https://www.instagram.com/andelsound/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
            </div>
            {/* <div>
              {" "}
              <a
                className="fab fa-youtube"
                href="https://www.instagram.com/andelsound/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="prices">
        <h4>{inEng ? "Pricelist" : "Ceník"}</h4>
        <div className="prices__music">
          <p>
            {inEng
              ? "Recording, mixing, producing:"
              : "Nahrávání, mixování, produkce:"}
            <span> 400 Kč / {inEng ? "hour" : "hodin"}</span>
          </p>
        </div>
        <div className="prices__commercial">
          <p>
            {inEng ? "Commercial projects:" : "Komerční projekty:"}
            <span> 800 Kč / {inEng ? "hour" : "hodin"}</span>
          </p>
        </div>

        <div className="prices__custom">
          <p>
            {inEng
              ? "Prices may vary due to type and size of individual project. Describe your project via email studio@andelsound.com and we will get back to you with specific calculations."
              : "Ceny jsou orientační podle typu a rozsáhlosti projektu. Popište nám svůj projekt na studio@andelsound.com a my Vám zašlem individualní kalkulaci ceny."}
          </p>
        </div>
      </div>
      <div className="map">
        <div className="map-responsive">
          <Iframe
            className="resp-iframe"
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5121.534360515754!2d14.400039928422888!3d50.07192170375043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945631ac2a15%3A0x6d86859c9f69b6de!2sAnd%C4%9Bl%2C%20150%2000%20Prague%205!5e0!3m2!1sen!2scz!4v1584270766069!5m2!1sen!2scz"
            }
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe>
        </div>
      </div>
    </section>
  );
}
