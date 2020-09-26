import React from "react";
import "./Contact.scss";
import "../Footer/Footer.scss";
import Iframe from "react-iframe";

export default function Contact({ inEng }) {
  return (
    <section id="contact" className="contacts">
      <div>
        <h2>{inEng ? "Contact Us" : "Kontaktujte Nás"}</h2>
        
        <div className="contact_box">
          <div>
            <span>
              <strong>email:</strong> hash@hash.com
            </span>
            <br />
            <span>
              <strong>tel:</strong> 420-777-777-777
            </span>
          </div>
          <div className="contact-email">
            <span>{inEng ? "send an email now" : "nyní pošlete e-mail"}</span>
            <a
              href="mailto:gpwildfeuer@email.wm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="far fa-envelope"
            >
              {" "}
            </a>
          </div>
        </div>
        
      </div>
      <div className="follow">
        <h4>Follow us here</h4>
        <div className="icons">
          <div>
            <i className="fab fa-facebook-square"></i>
          </div>
          <div>
            <i className="fab fa-instagram"></i>
          </div>
          <div>
            {" "}
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="prices">
          <h4>{inEng ? "Pricelist" : "Ceník"}</h4>
          <div className="prices__music">
            <h5>
              {" "}
              {inEng
                ? "Recording, mixing, producing: 400KC / hour"
                : "Nahrávání, mixování, produkce: 400KC / hodin"}
            </h5>
            {/* <span>: 400 KC / {inEng ? "hour" : "hodin"}</span> */}
          </div>
          <div className="prices__commercial">
            <h5>{inEng ? "Commercial projects" : "Komerční projekty"}</h5>
            <span>800 KC / {inEng ? "hour" : "hodin"}</span>
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
