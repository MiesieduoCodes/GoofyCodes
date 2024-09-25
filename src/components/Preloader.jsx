import { motion } from "framer-motion"; 
import { useEffect } from "react";  
import { TypeAnimation } from 'react-type-animation';
import { preLoaderAnim } from "../animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black z-50 text-neutral-300 selection:text-cyan-900 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="flex items-center justify-between font-bold text-white">
        <motion.h1 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="pb-16 text-3xl sm:text-6xl lg:text-8xl font-thin tracking-tight text-center"
        >
          <TypeAnimation 
            sequence={["Developer . Photographer . Drummer .", 4000]} 
            wrapper="span" 
            speed={20} 
            repeat={Infinity} 
          />
        </motion.h1>
      </div>
    </div>
  );
}

export default Preloader;
