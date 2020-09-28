import React, { useState } from "react";
import "./App.scss";
import Home from "./Home/Home";
import About from "./About/About";
import Photos from "./Photos/Photos";
import Gear from "./Gear/Gear";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import References from "./References/References";
import MenuSVG from "./Menu/MenuSVG";

function App() {
  const [inEng, setInEng] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLangChange = () => {
    setInEng(!inEng);
  };

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="App">
      <header className="header">
        {/* <img src="./img/logo.jpeg" alt="Andel Sound Logo"/> */}
        {/* <button onClick={handleLangChange}> {inEng ? "EN" : "CZ"}</button> */}
        <nav className="nav">
          <div className="nav-logo">
            <img src={require("../photos/AS_2.PNG")} alt="Andel Sound Logo"/>
          </div>
          <div className="lang">
            <form action="#">
              <div className="lang__range">
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
          <div className="nav-burger">
              {/* <img
                src={require("../photos/menu.png")}
                alt="menu icon"
                onClick={handleShowMenu}
              ></img> */}
              <div className="menu-svg"  onClick={handleShowMenu}>
              <MenuSVG />
              </div>
            {showMenu ? (
              <div className="nav-burger__links">
                <a href="#about" onClick={handleShowMenu} >{inEng ? "about" : "o nás"}</a>
                <a href="#references" onClick={handleShowMenu}>{inEng ? "references" : "reference"}</a>
                <a href="#photos" onClick={handleShowMenu}>{inEng ? "photos" : "fotky"}</a>
                <a href="#gear" onClick={handleShowMenu}>{inEng ? "equiptment" : "vybavení"}</a>
                <a href="#contact" onClick={handleShowMenu}>{inEng ? "contact" : "kontact"}</a>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="nav-links">
            <a href="#about">{inEng ? "about" : "o nás"}</a>
            <a href="#references">{inEng ? "references" : "reference"}</a>
            <a href="#photos">{inEng ? "photos" : "fotky"}</a>
            <a href="#gear">{inEng ? "equiptment" : "vybavení"}</a>
            <a href="#contact">{inEng ? "contact" : "kontact"}</a>
          </div>
          {/* <div className="nav-icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div> */}
        </nav>
      </header>
      <div>
        <Home inEng={inEng} />
        <About inEng={inEng} />
        <References inEng={inEng} />
        <Gear inEng={inEng} />
        <Photos inEng={inEng} />

        <Contact inEng={inEng} />
        <Footer inEng={inEng} />
      </div>
    </div>
  );
}

export default App;
