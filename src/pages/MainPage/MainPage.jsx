import React, { useState, useEffect } from "react";

// Styling
import "./MainPage.css";

// Components
import Form from "../../components/Form/Form";

// Utility functions
import { randomImageSelector } from "../../utils/randomImageSelector";

const HomePage = ({ images }) => {
  const [randomImage, setRandomImage] = useState({});

  useEffect(() => {
    if (images) {
      const selectedRandomImage = randomImageSelector(images);
      setRandomImage(selectedRandomImage);
    }
  }, [images]);

  return (
    <main className="main-page-container">
      <section className="main-top-container">
        <div className="main-top-left-image-container">
          {
            <img
              src={`${randomImage?.imageUrl}.jpg`}
              alt={randomImage?.imageAlt}
            />
          }
        </div>
        <div className="main-top-right-form-container">
          <div className="form-container">
            <Form />
          </div>
        </div>
      </section>
      <section className="main-bottom-container">
        <h1>Gallery Component</h1>
      </section>
    </main>
  );
};

export default HomePage;
