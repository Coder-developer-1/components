import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  'https://via.placeholder.com/400x300?text=Image+1',
  'https://via.placeholder.com/400x300?text=Image+2',
  'https://via.placeholder.com/400x300?text=Image+3',
  'https://via.placeholder.com/400x300?text=Image+4'
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick} className="carousel-button prev">Prev</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={handleNextClick} className="carousel-button next">Next</button>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <ImageCarousel />
    </div>
  );
}

export default App;



// .App {
//     text-align: center;
//     font-family: Arial, sans-serif;
//   }
  
//   .carousel {
//     position: relative;
//     width: 400px;
//     margin: 0 auto;
//   }
  
//   .carousel-image {
//     width: 100%;
//     height: auto;
//     display: block;
//   }
  
//   .carousel-button {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     background-color: rgba(0, 0, 0, 0.5);
//     color: white;
//     border: none;
//     padding: 10px;
//     cursor: pointer;
//   }
  
//   .carousel-button.prev {
//     left: 10px;
//   }
  
//   .carousel-button.next {
//     right: 10px;
//   }
  
//   .carousel-button:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }
  