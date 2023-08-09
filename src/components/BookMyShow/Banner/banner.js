import React, { useState, useEffect } from 'react';


import banner3 from "../../images/1690953464383_joboltahaiwahihotahaidesktop.avif";

import "../Banner/banner.css"

function Banner() {
  const images = [banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-scrolling configuration
  const autoScrollInterval = 3000; // Change this value to adjust the scroll speed
  useEffect(() => {
    const autoScrollTimer = setInterval(showNextImage, autoScrollInterval);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(autoScrollTimer);
  }, []);

  return (
    <div className="banner-container">
      <img className="banner-image" src={images[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} />
      <div className="banner-buttons">
        <button onClick={showPrevImage} className='prev'>&lt;</button>
        <button onClick={showNextImage} className='next'>&gt;</button>
      </div>
    </div>
  );
}

export default Banner;
