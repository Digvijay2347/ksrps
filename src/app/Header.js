import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false); // Track video overlay visibility
  const [isHoveringLogo, setIsHoveringLogo] = useState(false); // Track logo hover state

  useEffect(() => {
    // Ensure code runs only on client-side
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsHeaderVisible(scrollY === 0 || scrollY >= 750);
        setIsDropDownVisible(scrollY > 750);
      };
  
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
      
      // Clean up: Remove event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  

  const handleLinkHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLogoClick = () => {
    setIsVideoVisible(true);
    // Disable scrolling
    document.body.classList.add("no-scroll");
    // Close video overlay after 3 seconds
    setTimeout(() => {
      setIsVideoVisible(false);
      // Enable scrolling
      document.body.classList.remove("no-scroll");
    }, 3000); // 3 seconds
  };

  const handleLogoHover = () => {
    setIsHoveringLogo(true);
  };

  const handleLogoLeave = () => {
    setIsHoveringLogo(false);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      {!isMobileNavOpen && isHeaderVisible && (
        <nav className="bg-transparent shadow fixed top-0 left-0 w-full z-50 transition duration-300 animate-fadeIn backdrop-filter backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <img
                src="./logo.png"
                alt="Your Logo"
                className="h-8 animate-spin cursor-pointer"
                onClick={handleLogoClick} // Add click event handler
              />
            </div>
            <div className=" md:flex flex-grow items-center justify-center">
              <ul className="flex space-x-10">
                <li
                  className={`hover:scale-110 transition duration-300 ${
                    hoveredIndex !== 0 && hoveredIndex !== null
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => handleLinkHover(0)}
                  onMouseLeave={() => handleLinkHover(null)}
                >
                  <a className="text-white font-bold">//</a>
                  <span className="mx-1"></span>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 font-semibold"
                  >
                    Home&nbsp;
                    <sup className="text-xs">01</sup>
                  </a>
                </li>
                  <li
              className={`hover:scale-110 transition duration-300 ${hoveredIndex !== 1 && hoveredIndex !== null ? "opacity-50" : ""}`}
              onMouseEnter={() => handleLinkHover(1)}
              onMouseLeave={() => handleLinkHover(null)}
              >
                <a className="text-white font-bold">//</a>
                <span className="mx-1"></span>
                <a href="#expertise" className="text-white hover:text-yellow-400 font-semibold">
                Prowess&nbsp;<sup className="text-xs">01</sup> {/* Added "01" as superscript after "About" */}
                  </a>
                  </li>

                <li
                  className={`hover:scale-110 transition duration-300 ${hoveredIndex !== 2 && hoveredIndex !== null ? "opacity-50" : ""}`}
                  onMouseEnter={() => handleLinkHover(2)}
                  onMouseLeave={() => handleLinkHover(null)}
                >
                  <a className="text-white font-bold">//</a>
                  <span className="mx-1"></span>
                  <a href="#work-section" className="text-white hover:text-yellow-400 font-semibold">
                    Work&nbsp;<sup className="text-xs">02</sup> {/* Added non-breaking space (&nbsp;) for gap */}
                  </a>
                </li>
                <li
                  className={`hover:scale-110 transition duration-300 ${hoveredIndex !== 3 && hoveredIndex !== null ? "opacity-50" : ""}`}
                  onMouseEnter={() => handleLinkHover(3)}
                  onMouseLeave={() => handleLinkHover(null)}
                >
                  <a className="text-white font-bold">//</a>
                  <span className="mx-1"></span>
                  <a href="#rrs" className="text-white hover:text-yellow-400 font-semibold">
                    Contact&nbsp;<sup className="text-xs">03</sup> {/* Added non-breaking space (&nbsp;) for gap */}
                  </a>
                </li>
                <li
                  className={`hover:scale-110 transition duration-300 ${hoveredIndex !== 4 && hoveredIndex !== null ? "opacity-50" : ""}`}
                  onMouseEnter={() => handleLinkHover(4)}
                  onMouseLeave={() => handleLinkHover(null)}
                >
                  <a className="text-white font-bold">//</a>
                  <span className="mx-1"></span>
                  <a href="#experience-section" className="text-white hover:text-yellow-400 font-semibold">
                    Experience&nbsp;<sup className="text-xs">04</sup> {/* Added non-breaking space (&nbsp;) for gap */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Nav */}
          {/* Mobile Nav */}
<div className="md:hidden mt-4 absolute top-0 right-0">
  <button
    className="text-white hover:text-blue-600 focus:outline-none"
    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
  >
    <svg
      className="w-10 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </button>
  {isMobileNavOpen && (
    <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded-lg p-4 shadow-md z-30">
      <a href="#" className="text-white hover:text-blue-600 font-semibold block mb-2">
        Home
      </a>
      <a href="#expertise" className="text-white hover:text-blue-600 font-semibold block mb-2">
        Prowess
      </a>
      <a href="#work-section" className="text-white hover:text-blue-600 font-semibold block mb-2">
        Work
      </a>
      <button
        onClick={handleContactClick}
        className="text-white hover:text-blue-600 font-bold block"
      >
        Contact
      </button>
    </div>
  )}
</div>

        </nav>
      )}
      {isVideoVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <video
          src="rrs.mp4"
          autoPlay
          controls={false} // Hide controls
          className="absolute inset-0 object-cover w-full h-full animate-pinch-out"
        />
      </div>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold">Contact Us</h2>
              <button
                onClick={handleContactClose}
                className="text-white hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800 text-white p-2 rounded-lg mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 text-white p-2 rounded-lg mb-2"
              />
              <textarea
                placeholder="Message"
                className="w-full h-24 bg-gray-800 text-white p-2 rounded-lg mb-2"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
