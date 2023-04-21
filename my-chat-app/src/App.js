import React, { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const loadImages = () => {
    const count = Math.floor(Math.random() * 100) + 1;

    const newImages = [];
    for (let i = 0; i < count; i++) {
      newImages.push(`https://picsum.photos/1000?random=${i}`);
    }

    setImages([...images, ...newImages]);
  };

  return (
    <div>
      <div className="container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Random Image ${index}`}
            style={{ width: "250px", height: "250px", margin: "10px" }}
          />
        ))}
      </div>
      <button id="load-more" onClick={loadImages}>
        Load More Images
      </button>
    </div>
  );
}

export default App;



