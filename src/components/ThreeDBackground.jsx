// components/ThreeDBackground.jsx
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const ThreeDBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/fajNzmvq8fUtoXYr/scene.splinecode');
  }, []);

  return <canvas ref={canvasRef} id="canvas3d" className="absolute inset-0 w-full h-full" />;
};

export default ThreeDBackground;
