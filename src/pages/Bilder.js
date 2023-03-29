import React from "react";
import { Link } from "react-router-dom";

import "./Bilder.css";

import { imagesList } from "../data/data";

function Bilder() {
  return (
    <div className="attributions-section">
      <div className="attributions-page-name">Attributions</div>
      <div className="attributions-container">
      {imagesList.map((block) => {
        return (
          <div className="attribution-container">
            <div className="attribution-image-container">
              <img
                src={block.src}
                alt={block.alt}
              />
            </div>
            <div className="attribution-text-container">
              Photo by{" "}
              <a href={block.authorLink}>
                {block.author}
              </a>{" "}
              on{" "}
              <a href={block.imageLink}>
                Unsplash
              </a>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Bilder;
