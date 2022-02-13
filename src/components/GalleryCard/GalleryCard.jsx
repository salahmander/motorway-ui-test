import React from "react";

import "./GalleryCard.css";

const GalleryCard = ({ image, openModalHandler }) => {
  return (
    <>
      <div
        className="gallery-card-wrapper"
        onClick={() => openModalHandler(image)}
      >
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