import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './index.css';

const Carousel = ({ slides, infinite }) => {
  const [slideData, setSlideData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // Fetch slide data from the API
        const response = await fetch('http://localhost:3600/api/carousel');
        const data = await response.json();
        setSlideData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlides();
  }, []);

  const goToPreviousSlide = () => {
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) {
      prevSlide = infinite ? slideData.length - 1 : 0;
    }
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slideData.length) {
      nextSlide = infinite ? 0 : slideData.length - 1;
    }
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        {slideData.map((slide, index) => (
          <Slide key={slide.id} slide={slide} active={index === currentSlide} />
        ))}
      </div>

      {slides > 1 && (
        <div className="carousel-controls">
          <button onClick={goToPreviousSlide}>&lt;</button>
          <button onClick={goToNextSlide}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
