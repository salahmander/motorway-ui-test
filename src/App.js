import React, { useEffect, useState } from "react";

// Styling
import "./App.css";

// Page
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <MainPage images={images}/>
    </div>
  );
};

export default App;
