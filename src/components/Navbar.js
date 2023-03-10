import React, {useState} from "react";

import "./Navbar.css";

export default function Navbar({ nav, handleClickScroll, route, setRoute }) {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const sectionsList = [...nav.navList];

  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
        <h1 className="brand-name">{nav.logo}</h1>
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          {nav.navList.map((section, i) => {
            return (
              <li
                key={section}
                onClick={() => handleClickScroll(sectionsList[i])}
              >
                <p className="hover-underline-animation" onClick={handleShowNavbar}>{section}</p>
              </li>
            );
          })}
          <li onClick={handleShowNavbar}><img onClick={() => handleClickScroll('kontakt')} src={nav.contact.emailIcon} alt="Mail uns" className="navIcon" /></li>
        </ul>
      </div>
      <div onClick={handleShowNavbar} className="menu-icon-container"><img src={!showNavbar ? nav.menuIcon : nav.closeIcon} alt="Hamburger" className="menu-icon"/></div>
      </div>
    </nav>
  );
}
