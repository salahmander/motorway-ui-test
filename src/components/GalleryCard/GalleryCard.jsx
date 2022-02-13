import React from "react";

import "./GalleryCard.css";

const GalleryCard = ({ image }) => {
  return (
    <>
      <div className="gallery-card-wrapper">
        <img
          className="temp-image-name"
          src={`${image?.url}.jpg`}
          alt={image?.alt_description}
        />
      </div>
    </>
  );
};

export default GalleryCard;
