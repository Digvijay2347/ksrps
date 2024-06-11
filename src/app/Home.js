import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import { gsap } from 'gsap';
import { TweenMax, Power0 } from 'gsap';
import ThreeDBackground from '../components/ThreeDBackground';
import ThreeD from '../components/ThreeD';

import { FaReact } from "react-icons/fa";
import { CgLaptop } from "react-icons/cg";
import { SiAltiumdesigner } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import projects from './projectData';
import CustomCursor from './CustomCursor';
import { TypeAnimation } from 'react-type-animation';
import experiences from './Experience';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ContactSection = ({ isToggled, handleToggle }) => {
  return (
    <div className={`flex flex-col sm:flex-row text-white h-screen bg-black ${isToggled ? 'sm:min-h-screen' : ''}`}>
  {/* Left Side: About Me and Contact Details */}
  <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-8 sm:p-16 border-b sm:border-r border-gray-800">
    <h2 className="text-4xl text-[#00ff00] font-bold font-roboto-condensed mb-4 transition-all duration-500 transform hover:scale-105">
      AVAILABLE FOR SELECT FREELANCE OPPORTUNITIES
    </h2>
    <p className="text-xl font-light font-custom-2 mb-8">
      Have an exciting project you need help with? Send me an email or contact me via instant message!
    </p>
    <div className="space-y-4">
      <p className="text-lg font-custom-3 transition-all duration-300 hover:text-[#00ff00]">
        <span className="underline-effect" onClick={() => window.location.href = 'mailto:singhdigvijay.work@gmail.com'}>
          singhdigvijay.work@gmail.com
        </span>
      </p>
      <p className="text-lg font-custom-3 transition-all duration-300 hover:text-[#00ff00]">
        <a href="https://m.me/tamal" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Messenger
        </a>
      </p>
      <p className="text-lg font-custom-3 transition-all duration-300 hover:text-[#00ff00]">
        <a href="https://www.linkedin.com/in/singh07digvijay/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </p>
      <p className="text-lg font-custom-3 transition-all duration-300 hover:text-[#00ff00]">
        <a href="https://www.instagram.com/panwar.digvijaysingh/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Instagram
        </a>
      </p>
      <p className="text-lg font-custom-3 transition-all duration-300 hover:text-[#00ff00]">
        <a href="https://github.com/Digvijay2347" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Github
        </a>
      </p>
    </div>
  </div>

  {/* Right Side: Toggle Button */}
  <div className={`w-full sm:w-1/2 flex flex-col justify-center items-center p-8 sm:p-2 transition-all duration-2000 ${isToggled ? 'bg-white' : 'bg-black'}`}>
  <p className=" text-black text-6xl font-bold text-center mb-4">Unleash the Power of Creativity!</p>
  <div className="group mb-5 relative flex justify-center items-center text-zinc-600 text-sm font-bold"
>
  <div
    class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"
  >
    <div class="bg-white flex items-center gap-1 p-2 rounded-md">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-blue-600"
      >
        <circle stroke-linejoin="round" r="9" cy="12" cx="12"></circle>
        <path
          stroke-linejoin="round"
          d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
        ></path>
        <path
          stroke-linejoin="round"
          d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
        ></path>
        <path stroke-linejoin="round" d="M3 12H21"></path>
        <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
        <g filter="url(#filter0_d_15_556)">
          <path stroke-linejoin="round" d="M19.5 16.5H4.5"></path>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="3"
            width="17"
            y="16"
            x="3.5"
            id="filter0_d_15_556"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_15_556"
              in2="BackgroundImageFix"
              mode="normal"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_15_556"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <span>singhdigivijay.com</span>
    </div>
    <div
      class="shadow-md bg-purple-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"
    ></div>
    <div
      class="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0"
    >
      <div
        class="border-b border-r border-white bg-black absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"
      ></div>
    </div>
  </div>

  <div
    class="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-black to-black p-3 rounded-full cursor-pointer duration-300"
  >
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      class="fill-white"
    >
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
      ></path></svg
    ><span class="text-[0px] text-white group-hover:text-sm duration-300"
      >Check Our Website</span
    >
  </div>
</div>

    <div className="checkbox-wrapper-25">
      <input
        type="checkbox"
        className="checkbox-input"  
        checked={isToggled}
        onChange={handleToggle}
      />
    </div>
    {/*Card  */}
    {isToggled && (
    <div class="card mt-6">
  <div class="top-section">
    <div class="border"></div>
    <div class="icons">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" class="svg">
          <path fill="white" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"></path>
          <path fill="white" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"></path>
          <path fill="white" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"></path>
        </svg>
      </div>
      <div class="social-media">
      <a href="https://www.instagram.com/panwar.digvijaysingh/?hl=en" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg">
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
        </a>
        <a href="https://your-twitter-link.com" target="_blank" rel="noopener noreferrer">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
        </a>
        <a href="https://your-discord-link.com" target="_blank" rel="noopener noreferrer">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
        </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="bottom-section">
    <span class=" font-bold title">DIGVIJAY SINGH</span>
    <div class="row row1">
      <div class="item">
        <span class="big-text">2000+ hrs</span>
        <span class="regular-text">Working Time</span>
      </div>
      <div class="item">
        <span class="big-text">100%</span>
        <span class="regular-text">Reliability</span>
      </div>
      <div class="item">
        <span class="big-text">1000+</span>
        <span class="regular-text">Contributions</span>
      </div>
    </div>
  </div>
</div>
 )}
  </div>
</div>

  );
};





const ExperienceItem = ({ title, company, duration, description, faq, logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState(0); // Define iconRotation state

  const toggleDescription = () => {
    setIsOpen(!isOpen);
    setIconRotation(isOpen ? 0 : 180);
  };

  return (
    <div className="bg-purple-700 rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-white">{title}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-white">{duration}</p>
          <p className="text-sm text-blue-200 mr-4">{company}</p>
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4  transition-transform duration-300"
              onClick={toggleDescription}
              style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              border: '2px solid white',
              borderRadius: '50%', }} 
              >
                {isOpen ? '-' : '+'}
          </button>

        </div>
      </div>
      <div className={`px-4 py-1  sm:px-6 transition-height duration-700 ease-out ${isOpen ? 'h-auto py-4' : 'h-0 py-0'}`}>
        <div className="flex justify-between items-start">
          <p className="text-white mb-4">{description}</p>
          {logoUrl && (
            <img src={logoUrl} alt={`${company} logo`} className=" mt-2 w-16 h-16 object-contain ml-4" />
          )}
        </div>
        {isOpen && faq && (
          <div className="faq">
            <h4 className="text-lg leading-6 font-medium text-white mb-2">FAQ</h4>
            <ul className="list-disc list-inside">
              {faq.map((item, index) => (
                <li key={index} className="text-white mb-2">
                  <strong>{item.question}</strong>
                  <p>{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
const Home = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const animationSectionRef = useRef(null);
  // Define an array of image paths
  
  
  useEffect(() => {

    AOS.init();
    ScrollReveal().reveal('.rocket-image', { delay: 300, origin: 'left', distance: '100px', duration: 1000 });
    ScrollReveal().reveal('.caraousal', { delay: 300, origin: 'left', distance: '100px', duration: 1000 });
    ScrollReveal().reveal('.specialized', { delay: 300, origin: 'left', distance: '100px', duration: 1000, reset: false });
    ScrollReveal().reveal('.beautiful', { delay: 300, origin: 'right', distance: '100px', duration: 1000, reset: false });
    ScrollReveal().reveal('.crazy', { delay: 300, origin: 'left', distance: '100px', duration: 1000, reset: true });
    ScrollReveal().reveal('.creative', { delay: 300, origin: 'right', distance: '100px', duration: 1000, reset: true });
    ScrollReveal().reveal('.shit', { delay: 300, origin: 'left', distance: '100px', duration: 1000, reset: true });
    ScrollReveal().reveal('.expertise', { delay: 300, origin: 'bottom', distance: '100px', duration: 1000, reset: true });
    ScrollReveal().reveal('.re', { delay: 300, origin: 'left', distance: '100px', duration: 1000, reset: true });
    ScrollReveal().reveal('.res', { delay: 300, origin: 'left', distance: '100px', duration: 1000, reset: true });
    // Rain effect using TweenMax
    TweenMax.staggerTo('.rain', 2, { y: '100%', ease: Power0.easeNone, repeat: -1 }, 0.05);
  }, []);
  
  const getResumeDownloadUrl = () => {
    const resumePath = "gs://portfolio-79d97.appspot.com/resume.pdf";
    const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/portfolio-79d97.appspot.com/o/resume.pdf?alt=media`;
    return downloadUrl;
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start the animation when the section is visible
        animationSectionRef.current.classList.add('animate');
      }
    }, { threshold: 1.0 });

    observer.observe(animationSectionRef.current);

    return () => {
      observer.unobserve(animationSectionRef.current);
    };
  }, []);

  // State variables for selected filters
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to filter projects
  const filterProjects = (project) => {
    if (!selectedCategory || project.category === selectedCategory) {
      return true;
    }
    return false;
  };

  // Event handlers to update selected filters
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // framer-motion variants
  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
 
  
  

  return (
    <>
    <div>
      <div className="orb-container">
        <div className="orb"></div>
      </div>

      <CustomCursor />

      {/* Section1 */}
<div className="relative">
  <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" src="th.mp4" type="video/mp4"></video>
  <div className="flex flex-col justify-center items-center min-h-screen bg-cover relative">
    
    {/* Content */}
    <div className="max-w-screen-lg px-8 py-8 text-center relative z-10">
      <div className="sm:flex sm:items-center gap-3">
        {/* <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">HI, MY NAME IS</h1> */}
        <h1 className="text-8xl md:text-7xl lg:text-14xl text-purple-500 font-bold mb-10 ">
          { /* Wrap each letter of the name in a span */ }
          { "DIGVIJAY SINGH".split("").map((letter, index) => (
            <span key={index} className="hover-effect text-5xl md:text-6xl lg:text-8xl">{letter}</span>
          ))}
        </h1>
      </div>
      {/* Description */}
      <p className="text-base text-white md:text-lg lg:text-xl mb-8">
        I design and develop #func()%*!--
      </p>
      {/* Button */}
      <a href={getResumeDownloadUrl()} download>
        <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 mt-20 rounded-full z-900">
          Download Resume
        </div>
      </a>
    </div>
    {/* Scroll down button */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
  {typeof window !== 'undefined' && (
    <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="text-black px-4 py-2 rounded-full shadow-lg relative">
      <div className="mouse"></div>
    </button>
  )}
</div>

    
  </div>
</div>    
         {/* Section 5
         <div className='relative'>
           <div className="relative flex-col sm:flex justify-center items-start min-h-screen bg-cover ">
            <ThreeDModel />
           </div>
          </div>   */}
          

      {/* Section x */}
      <div id='expertise' className="relative overflow-hidden">
        <ThreeD className="w-100px h-10" />
        <div className="rrt bg-black bg-cover bg-center text-white flex flex-col justify-center items-center py-10 min-h-screen z-50">
          <h1 className="text-4xl sm:text-8xl font-bold z-50 mb-6 font-roboto tracking-tighter absolute top-10  expertise">
            My Expertise
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl relative">
            {/* Faded background image */}
            <img
              src="/scr.png"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              style={{ marginTop: '170px' }} // Adjust the margin to move the image downward
            />
            {/* Cards with SVG icons */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg z-20 relative border border-white flex flex-col justify-between sm:justify-between w-60 sm:w-80 mx-2"style={{ marginTop: '150px' }}>
              <div className="flex items-center mb-4 justify-between">
                <CgLaptop className="w-16 h-12 mb-4"/>
                <h2 className="text-2xl ml-7  font-semibold mb-2 relative">Software Development<span className="absolute left-0 bottom-0 w-full h-2 bg-pink-500"></span></h2>
              </div>
              <p className="text-white text-2xl font-Roberto">
                Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg z-20 relative border border-white flex flex-col justify-between w-60 sm:w-80 mx-2"style={{ marginTop: '150px' }}>
            <div className="flex items-center mb-4 justify-between">
                <FaReact className="w-16 h-12 mb-4"/>
                <h2 className="text-2xl ml-7  font-semibold mb-2 relative">Frontend Dev
React, NextJS<span className="absolute left-0 bottom-0 w-full h-2 bg-pink-500"></span></h2>
              </div>
              <p className="text-white text-2xl font-Roberto">
              Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg z-20 relative border border-white flex flex-col justify-between w-60 sm:w-80 mx-6 sm:mx-8 "style={{ marginTop: '150px' }}>
              <div className="flex items-center mb-4 justify-between">
                <SiAltiumdesigner className="w-16 h-12 mb-4" />
                <h2 className="text-2xl ml-7  font-semibold mb-2 relative">OPen Source<span className="absolute left-0 bottom-0 w-full h-2 bg-pink-500"></span></h2>
              </div>
              <p className="text-white text-2xl font-Roberto">
                Leveraging extensive experience in contributing to and managing open source projects, ensuring high-quality, collaborative development.
              </p>
            </div>
          </div>
        </div>
      </div>

  {/* New Work Section */}
  <div id="work-section" className="relative flex-col sm:flex justify-center items-start min-h-screen bg-cover bg-black px-10 sm:px-20">
  <div className="max-w-8xl p-10 flex gap-16 flex-wrap">
    <div className="flex flex-row items-start">
      <div className="w-1/2 pr-10">
        <h1 data-aos="fade-right" className="text-4xl sm:text-8xl font-Roboto font-bold mb-4 leading-none text-white break-words max-w-full word-break text-shadow-glow">My </h1>
        <h1 data-aos="fade-left" className="text-4xl sm:text-8xl font-Roboto font-bold mb-4 leading-none text-white break-words max-w-full word-break text-shadow-glow">Work</h1>
        <div ref={animationSectionRef} id="animation-section" className="border-l-4 border-[#00ff00] pl-4">
  <TypeAnimation
    sequence={[
      'Here are some of my projects and works. I specialize in creating visually appealing and highly functional designs. Deployed scalable travel, event, and telemedicine web and hybrid mobile apps using React SPA and PWA. Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.',
    ]}
    speed={20}
    className="text-1xl sm:text-2xl text-white mt-4 font-mono font-light"
  />
</div>
      </div>
      
      <div data-aos="zoom-in" data-aos-easing="ease-in-out"
  data-aos-delay="500"
  data-aos-offset="100" className="w-1/2 pl-20 relative">
        <img src="bgg.png" alt="Image" className="w-full h-auto mt-20 z-10" style={{
    objectFit: 'cover',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden'
    }} />
    </div>
  </div>
  </div>
        {/* Filter UI */}
        <div className="flex justify-center my-10">
          <h1 className="text-white">Filter By</h1>
          <span className="p-10"></span>
          <div className="inline-block relative w-64">
            <div className="inline-block relative w-64">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Information Security">Information Security</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>
         
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full p-3 grid-container">
  {projects.filter(filterProjects).map((project, index) => (
    <div key={index} className={`relative group overflow-hidden rounded-lg shadow-md grid-item ${index % 4 === 0 ? 'horizontal' : index % 4 === 1 ? 'vertical' : index % 4 === 2 ? 'square' : 'horizontal'}`}>
      <img data-aos="zoom-in" data-aos-once="false"  src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      <div className="overlay">
        <h3>{project.title}</h3>
        <p>{project.supertext}</p>
      </div>
    </div>
  ))}
</div>
</div>

 {/* Professional Experience Section */}
 <div id="experience-section" className="bg-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <h2 className=" re justify-center text-center text-4xl sm:text-7xl font-Roboto font-bold mb-4 text-white">
              Professional 
            </h2>
            <h2 className="res justify-center text-center text-4xl sm:text-7xl font-Roboto font-bold mb-8 text-white">
               Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>


      {/* Section 2 */}
      <div className="flex-col sm:flex justify-center items-start min-h-screen bg-cover bg-black">
        {/* Additional Section */}
        <div className="max-w-6xl p-6 flex">
          <div className="flex-1 mb-6 sm:mb-0">
            <h1 className="text-2xl sm:text-6xl font-bold mb-4 leading-none">
              <span className="specialized block text-white">SPECIALIZED IN</span>
              <span className="beautiful block text-[#00ff00]">BEAUTIFUL</span>
              <span className="crazy block text-white">CRAZY</span>
              <span className="creative block text-white">CREATIVE</span>
              <span className="shit block text-white">SH*T</span>
            </h1>
            <div className="border-l-4 border-[#ff00ff] pl-4">
              <p className="text-1xl sm:text-2xl text-[#ff00ff]">
                I Make Awesome Code/Design Content And My Creativity Is Off The Charts. Don’t Believe Us? Check Our Projects And Don’t Be A Stranger, We’re Just A Call Away.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img alt="Creative Image" className="w-[200px] h-[200px] sm:w-[300px] sm:h-[400px] sm:top-10 mb-4 sm:mb-0 floating-animation" src="/astro.png" />
          </div>
        </div>

        {/* Carousel */}
        
      </div>

      



        {/* Contact Section */}
        <div id='rrs'>
      <ContactSection isToggled={isToggled} handleToggle={handleToggle} />
    </div>


      

      </div>
    </>
  );
};

export default Home;
