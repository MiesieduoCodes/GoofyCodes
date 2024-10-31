import { motion } from "framer-motion"; 
import { useEffect, useState } from "react";  
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const Preloader = ({ onLoaded }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simulate loading time and trigger the transition
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoaded) onLoaded(); // Call the function passed as a prop to notify loading completion
    }, 5000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0, filter: isAnimating ? "blur(0px)" : "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center w-full h-full bg-black z-50 text-neutral-300 selection:text-cyan-900 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
      style={{ pointerEvents: isAnimating ? "auto" : "none" }} // Ensures no interaction after animation
    >
      <div className="flex items-center justify-between font-bold text-white">
        <motion.h1 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="pb-16 text-3xl sm:text-6xl lg:text-8xl font-thin tracking-tight text-center"
        >
          <TypeAnimation 
            sequence={["Developer . Photographer . Drummer . Goofy", 5000]} 
            wrapper="span" 
            speed={20} 
            repeat={Infinity} 
          />
        </motion.h1>
      </div>
    </motion.div>
  );
};

// Add PropTypes for prop validation
Preloader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default Preloader;
