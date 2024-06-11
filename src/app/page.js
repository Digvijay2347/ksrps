// pages/page.js
"use client"; // Add "use client" here
// pages/page.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Preloader from './Preloader';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure code runs only on client-side
    if (typeof window !== 'undefined') {
      // Simulate loading by setting a timeout
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 7000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading && <Preloader />} {/* Show Preloader while isLoading is true */}
      
      <Header />
      <Home />
    </>
  );
};

export default Page;
