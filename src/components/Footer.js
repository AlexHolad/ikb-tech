import React from "react";
import { Link } from "react-router-dom"

import "./Footer.css";

function Footer({ footer }) {
  const { blocksInformation, copyright } = footer;

  return (
    <div className="footer-container">
      <div className="footer-blocks-container">
        {blocksInformation.map((block) => {
          return (
            <div className="footer-block-container">
              <div className="footer-block-header">{block.headline}</div>
              <ul className="footer-block-list">
                {block.elList.map((item) => {
                  return (
                    <li className="footer-block-part">
                      <img
                        className="footer-block-part-icon"
                        src={item.icon}
                        alt={item.alt}
                      />
                      {item.link ? <Link to={item.link} className="footer-block-part-text">{item.text}</Link> : <div className="footer-block-part-text">{item.text}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="footer-copyright">{copyright}</div>
    </div>
  );
}

export default Footer;
