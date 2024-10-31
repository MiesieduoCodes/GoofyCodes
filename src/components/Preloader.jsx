import { motion } from "framer-motion"; 
import { useEffect, useState } from "react";  
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types'; 
import { FaCode, FaCameraRetro, FaDrum, FaEnvelope, FaProjectDiagram } from 'react-icons/fa'; // Import the icons

const Preloader = ({ onLoaded }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoaded) onLoaded(); 
    }, 5000); 

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 10;
        clearInterval(progressInterval);
        return prev;
      });
    }, 500); 

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0, filter: isAnimating ? "blur(0px)" : "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-black z-50 text-neutral-300 selection:text-cyan-900 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
      style={{ pointerEvents: isAnimating ? "auto" : "none" }}
    >
      <motion.h1 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="pb-8 text-3xl sm:text-6xl lg:text-8xl font-thin tracking-tight text-center"
      >
        <TypeAnimation 
          sequence={["Developer . Photographer . Drummer . Goofy", 5000]} 
          wrapper="span" 
          speed={20} 
          repeat={Infinity} 
        />
      </motion.h1>
      
      {/* Loading Bar */}
      <div className="w-full max-w-md h-2 bg-gray-700 rounded mt-4">
        <motion.div
          className="h-full bg-blue-600 rounded"
          style={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Icons */}
      <div className="flex justify-center mt-8 space-x-4 text-white text-2xl">
        <FaCode />
        <FaCameraRetro />
        <FaDrum />
        <FaEnvelope />
        <FaProjectDiagram />
        {/* Add more icons as needed */}
      </div>
    </motion.div>
  );
};

Preloader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default Preloader;
