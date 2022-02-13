import React from "react";

// Styling
import "./MainPage.css";

const HomePage = ({ images }) => {
  return (
    <main className="main-page-container">
      <section className="main-top-container">
        <div className="main-top-left-image-container">
          <h1>Random Image</h1>
        </div>
        <div className="main-top-right-form-container">
          <div className="form-container">
            <h1>Form Component</h1>
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
