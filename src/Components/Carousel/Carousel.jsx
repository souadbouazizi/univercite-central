import React, { useState } from 'react';
import slide1 from '../../Assets/images/slide1.png';
import slide2 from '../../Assets/images/slide2.png';
import slide3 from '../../Assets/images/slide3.png';





const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Nombre total de diapositives

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full">
      {/* Container pour les slides */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="w-full flex-shrink-0 relative">
            <img src={slide1} alt="Slide 1" className="w-full h-auto" />         
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
              <div>
              <h1 className='font-bold text-white  md:text-4xl text-2xl uppercase tracking-wide'>Through learning we progress</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 relative">
            <img src={slide2} alt="Slide 2" className="w-full h-auto" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
            <div>
              <h1 className='font-bold text-white  md:text-4xl text-2xl uppercase tracking-wide'>Through learning we progress</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 relative">
            <img src={slide3} alt="Slide 3" className="w-full h-auto" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
            <div>
              <h1 className='font-bold text-white md:text-4xl text-2xl uppercase tracking-wide'>Through learning we progress</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons de navigation */}
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-3"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-3"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
