import React from "react";

import "./Gallery.css";

import GalleryCard from "../../components/GalleryCard/GalleryCard";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="inner-gallery-wrapper">
        {images &&
          images.map((image) => (
            <GalleryCard
              image={image}
              key={image.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
