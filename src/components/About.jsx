import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { 
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-indigo-900 py-16 text-gray-200">
      {/* Floating Icons */}
      <div className="absolute top-5 left-5 text-gray-100">
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
          <FaHtml5 size={50} />
        </motion.div>
      </div>
      <div className="absolute top-5 right-5 text-gray-100">
        <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate">
          <FaCss3Alt size={50} />
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-5 text-gray-100">
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
          <FaJs size={50} />
        </motion.div>
      </div>
      <div className="absolute bottom-5 right-5 text-gray-100">
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate">
          <FaNodeJs size={50} />
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-100">
        <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate">
          <FaDatabase size={50} />
        </motion.div>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-100">
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate">
          <FaHtml5 size={50} />
        </motion.div>
      </div>

      <div className="text-center mb-12">
        <motion.h2
          variants={iconVariants(1.3)}
          initial="initial"
          animate="animate"
          className="text-4xl font-bold text-gray-100 md:text-5xl"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-between items-center max-w-5xl mx-auto px-4">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
        >
          {/* Optional image can go here */}
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 px-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-lg leading-relaxed md:leading-loose">
              I am a versatile professional excelling as a Fullstack Web Developer, Nature Photographer, and Drummer. 
              Proficient in both front-end and back-end technologies, I manage web projects from concept to deployment using tools like 
              <span className="font-semibold text-indigo-400"> HTML, CSS, JavaScript, Node.js,</span> and 
              <span className="font-semibold text-indigo-400"> MongoDB.</span><br/><br/>
              As a Nature Photographer, I travel to document wildlife and landscapes, producing high-quality images that promote environmental conservation.<br/><br/>
              As a Drummer, I bring rhythm to various musical genres, enhancing live performances and recording sessions with my exceptional timing and coordination.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
