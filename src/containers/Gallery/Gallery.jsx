import React, { useState } from "react";

import "./Gallery.css";

import GalleryCard from "../../components/GalleryCard/GalleryCard";
import Modal from "../../components/Modal/Modal";

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState({});

  const openModalHandler = (image) => {
    setIsOpen(true);
    setImageData(image);
  };
  return (
    <div className="gallery-container">
      <div className="inner-gallery-wrapper">
        {images &&
          images.map((image) => (
            <GalleryCard
              image={image}
              key={image.id}
              openModalHandler={openModalHandler}
            />
          ))}
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} imageData={imageData} />
      )}
    </div>
  );
};

export default Gallery;
