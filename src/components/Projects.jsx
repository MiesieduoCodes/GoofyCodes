import { motion } from "framer-motion";
import { MyProjects } from "../../constants/index";
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaPencilRuler, FaCogs, FaReact, FaNodeJs } from 'react-icons/fa';

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

const Projects = () => {
  return (
    <div className="relative bg-gradient-to-b from-yellow-900 to-green-900 border-b border-neutral-900 pb-4">
      <motion.h2
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="my-10 text-center text-3xl md:text-5xl text-white"
      >
        Pro<span className="text-neutral-400">jects</span>
      </motion.h2>
      <div className="">
        {MyProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center mb-10 md:mb-20"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3 p-4 md:p-8 flex justify-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-3/4 xl:w-1/2"
              >
                <img
                  src={project.image}
                  className="rounded-lg w-full max-w-xl lg:max-w-2xl shadow-lg hover:scale-105 transition duration-300"
                  alt={project.title}
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.8 }}
              className="w-full lg:w-1/2 p-4 items-center flex flex-col justify-center md:p-8"
            >
              <div className="w-full max-w-xl">
                <h6 className="mb-2 text-lg font-semibold md:text-xl text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400 text-sm md:text-base">
                  {project.description}
                </p>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 rounded bg-blue-900 px-2 py-1 text-xs md:text-sm font-medium inline-block text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div className="absolute top-10 left-16 text-amber-400 text-4xl animate-pulse" variants={iconVariants(2)} initial="initial" animate="animate"><FaCode /></motion.div>
      <motion.div className="absolute bottom-10 right-14 text-blue-400 text-5xl animate-pulse" variants={iconVariants(2.5)} initial="initial" animate="animate"><FaReact /></motion.div>
      <motion.div className="absolute top-1/3 left-1/4 text-green-400 text-4xl animate-pulse" variants={iconVariants(3)} initial="initial" animate="animate"><FaNodeJs /></motion.div>
      <motion.div className="absolute top-20 right-20 text-purple-400 text-3xl animate-pulse" variants={iconVariants(3.5)} initial="initial" animate="animate"><FaPencilRuler /></motion.div>
      <motion.div className="absolute top-32 left-10 text-teal-400 text-4xl animate-pulse" variants={iconVariants(2.8)} initial="initial" animate="animate"><FaServer /></motion.div>
      <motion.div className="absolute bottom-20 left-1/3 text-pink-400 text-5xl animate-pulse" variants={iconVariants(3.1)} initial="initial" animate="animate"><FaCogs /></motion.div>
      <motion.div className="absolute bottom-10 right-1/3 text-yellow-400 text-3xl animate-pulse" variants={iconVariants(3.6)} initial="initial" animate="animate"><FaTools /></motion.div>
      <motion.div className="absolute bottom-5 left-16 text-cyan-400 text-4xl animate-pulse" variants={iconVariants(3.9)} initial="initial" animate="animate"><FaLaptopCode /></motion.div>
      <motion.div className="absolute top-1/2 right-1/3 text-indigo-400 text-3xl animate-pulse" variants={iconVariants(2.7)} initial="initial" animate="animate"><FaDatabase /></motion.div>
    </div>
  );
};

export default Projects;
