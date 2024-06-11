import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      document.body.classList.remove('no-scroll');
    }, 3000); // Hide loader after 7 seconds

    document.body.classList.add('no-scroll');

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={`preloader fixed top-0 left-0 w-screen min-h-screen bg-black flex justify-center items-center z-50 ${showLoader ? 'visible' : 'hidden'}`}>
      <video className="loader w-full h-full object-cover" style={{maxWidth: "100%", maxHeight: "100%"}} autoPlay muted playsInline loop>
        <source src="preloader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
