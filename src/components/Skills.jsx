import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import{motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate:{ y: [10, -10],
  transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  }
  },
})


const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
                <motion.h1 
                transition={{}}
                variants={iconVariants(1.3)}
                initial="initial"
                animate="animate"
                
                className="my-20 text-center text-5xl">My  
                <span className="text-neutral-500"> Skills</span></motion.h1>
                <motion.div
                whileInView={{opacity: 3, x:0}}
                initial={{opacity:0, x: -100}}
                transition={{ duration: 1.5 }}
                 

                className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                    variants={iconVariants(1.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine  className="text-7xl text-cyan-300"/>
                    </motion.div>

                    <motion.div
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandNextjs  className="text-7xl text-black-300"/>
                    </motion.div>
                    <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoJavascript className="text-7xl text-yellow-300"/>
                    </motion.div>
                    <motion.div
                    variants={iconVariants(3.3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandCSharp className="text-7xl text-purple-300"/>
                    </motion.div>
                    <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb  className="text-7xl text-green-300"/>
                    </motion.div>

                </motion.div>
    </div>
  )
}

export default Skills