import Hero_Image from "../Assets/freepik-export-20241031151654Urrm.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaDrum, FaCamera } from 'react-icons/fa'; // Import icons

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-12 lg:mb-35 bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <div className="flex px-14 flex-wrap lg:items-center lg:justify-between">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-bold lg:text-8xl max-w-xl lg:mt-16 text-center lg:text-left"
            >
              Miesieduo Veria
            </motion.h1>
            
            <motion.span
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "Nature Photographer", 2000,
                  "Drummer", 2000,
                  "Game Developer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.span>
            
            <motion.p
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 text-lg font-light text-center lg:text-left"
            >
              <TypeAnimation
                sequence={[ 
                  "I’m Goofy, passionate about making the world a brighter place through creativity and innovation. With a background in diverse fields, I’m dedicated to crafting unique solutions and inspiring positive change. My mission is to bring fresh ideas and enthusiasm to everything I do. Let’s connect and explore how we can collaborate!",
                  1000,
                ]}
                wrapper="span"
                speed={85}
                repeat={Infinity}
              />
            </motion.p>
            
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Connect with Me
            </motion.button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              src={Hero_Image}
              alt="Goofy Hero"
              className="w-3/4 lg:w-full max-w-lg shadow-lg rounded-lg transform hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* Floating Icons Section */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <motion.div className="flex justify-around w-full">
          <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
            <FaCode className="text-white text-6xl" />
          </motion.div>
          <motion.div variants={iconVariants(1.3)} initial="initial" animate="animate">
            <FaDrum className="text-white text-6xl" />
          </motion.div>
          <motion.div variants={iconVariants(1.7)} initial="initial" animate="animate">
            <FaCamera className="text-white text-6xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
