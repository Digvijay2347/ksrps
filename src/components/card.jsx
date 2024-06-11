// components/ThreeDBackground.jsx
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const ThreeDBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/pSMeSYx-vxS-WZaC/scene.splinecode');
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas3d"
      className="absolute inset-0 z-30"
      style={{ width: '50vw', height: '50vh' }} // Adjust size here
    />
  );
};

export default ThreeDBackground;
