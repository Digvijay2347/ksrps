// ParallaxIllustration.js

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css'; // Import your CSS module file

const ParallaxIllustration = () => {
  const parallaxContainerRef = useRef(null);

  useEffect(() => {
    // Parallax effect logic
    const container = parallaxContainerRef.current;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const speedFactor = 10; // Adjust this value for the desired parallax effect

      // Calculate the position for each layer based on the scroll position
      const layers = container.querySelectorAll('.parallax-layer');
      layers.forEach((layer, index) => {
        const speed = parseInt(layer.dataset.speed);
        const yPos = -(scrollTop * speed) / speedFactor;
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={parallaxContainerRef} className={styles.parallaxContainer}>
      {/* Define your parallax layers with different speeds */}
      <div className={`${styles.parallaxLayer} ${styles.layer1}`} data-speed="10"></div>
      <div className={`${styles.parallaxLayer} ${styles.layer2}`} data-speed="20"></div>
      <div className={`${styles.parallaxLayer} ${styles.layer3}`} data-speed="30"></div>
    </div>
  );
};

export default ParallaxIllustration;
