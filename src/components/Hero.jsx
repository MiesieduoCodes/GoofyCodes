import Hero_Image from "../Assets/Icons/GOOOFYY2.png";
import { motion } from "framer-motion";   
import { TypeAnimation } from 'react-type-animation';

const container = () => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3}
  }
})

const Hero = () => {
  return (
    <div className="border-b px-9 border-neutral-900 pb-4 lg:mb-35">
        <div className="flex px-14 flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                  variants={container(0)}
                  initial={{ x: 100, opacity: 0}}
                  animate={{ x: 0, opacity: 1}}
                  transition={{duration: 1, delay: 0.9}}
                className="pb-16 text-6xl font-thin tracking-tight max-w-xl lg:mt-16 
                :lg:text-8xl">Miesieduo Veria</motion.h1>
                <motion.span
                                  variants={container(0.9)}
                                  whileInView={{opacity: 1, x: 1}}
                                  initial={{ x: 100, opacity: 0}}
                                  animate={{ x: 0, opacity: 1}}
                                  transition={{duration: 1, delay: 1.5}}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight h-full mb-3 text-transparent">

                  
<TypeAnimation sequence={[
  
                    "Full Stack Developer",
                    1000,
                    "Nature Photographer",
                    1000,
                    "Drummer",
                    1000,
                    "Game Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}/>

                  
                  </motion.span>
                <motion.p
                                  whileInView={{opacity: 1, x: 1}}
                                  variants={container(1.3)}
                                  initial={{ x: 100, opacity: 0}}
                                  animate={{ x: 0, opacity: 1}}
                                  transition={{duration: 1, delay: 2}}className="my-2 max-w-xl py-6 font-light text-center tracking-tighter">
      <TypeAnimation sequence={[

                    "I’m Goofy, Passionate about making the world a brighter place through creativity and innovation. With a background in diverse fields, I’m dedicated to crafting unique solutions and inspiring positive change. My mission is to bring fresh ideas and enthusiasm to everything I do. Let’s connect and explore how we can collaborate!",
                    1000,

                  ]}
                  wrapper="span"
                  speed={88}
                  repeat={Infinity}
                  />

                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                < motion.img
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration: 1, delay: 2.5}}
                src={Hero_Image } alt="" />
                </div>
                </div>
        </div>
    </div>
  )
}

export default Hero