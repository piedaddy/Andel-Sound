import React, { useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Photos from "./Photos/Photos";
import Gear from "./Gear/Gear";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import References from './References/References';

function App() {
  const [inEng, setInEng] = useState(false);

  const handleLangChange = () => {
    setInEng(!inEng);
  };

  return (
    <div className="App">
      <header className="header">
        {/* <img src="./img/logo.jpeg" alt="Andel Sound Logo"/> */}
        {/* <button onClick={handleLangChange}> {inEng ? "EN" : "CZ"}</button> */}
        <nav className="nav">
          <div>
            <form action="#">
              <div className="lang_range">
                EN
                <input
                  className="range"
                  onChange={handleLangChange}
                  type="range"
                  id="test5"
                  min="0"
                  max="1"
                />
                CZ
              </div>
            </form>
          </div>
          <div className="nav-links">
            {/* <a href="#home"> {inEng ? "home" : "domů"}</a> */}
            <a href="#services"> {inEng ? "services" : "služeb"}</a>
            <a href="#gear"> {inEng ? "equiptment" : "vybavení"} </a>
            <a href="#photos"> {inEng ? "photos" : "fotky"} </a>
            <a href="#references"> {inEng ? "references" : "reference"} </a>
            <a href="#contact"> {inEng ? "contact" : "kontact"} </a>
          </div>
          <div className="nav-icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </nav>
      </header>
      <div>
        <Home inEng={inEng} />
        <Services inEng={inEng} />
        <Gear inEng={inEng} />
        <Photos inEng={inEng} />
        <References inEng={inEng} />
        <Contact inEng={inEng} />
        <Footer inEng={inEng} />

      </div>
    </div>
  );
}

export default App;
