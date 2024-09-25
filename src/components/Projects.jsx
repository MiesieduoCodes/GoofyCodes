import { motion } from "framer-motion";
import { MyProjects } from "../../constants/index";

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
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        transition={{}}
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="my-10 text-center text-3xl md:text-5xl"
      >
        Pro<span className="text-neutral-500">jects</span>
      </motion.h2>
      <div className="">
        {MyProjects.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-10 md:mb-20">
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 p-4 md:p-8"
            >
              <div className="flex items-center justify-center">
                <div className="w-full sm:w-3/4 lg:w-1/4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      className="mb-4 md:mb-10 w-92 rounded"
                      alt={project.title}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.8 }}
              className="w-full lg:w-1/2 p-4 items-center flex flex-col justify-center md:p-8"
            >
              <div className="w-full ml-16 max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-lg font-semibold md:text-xl">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400 text-sm md:text-base">
                  {project.description}
                </p>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 rounded bg-blue-900 px-2 py-1 text-xs md:text-sm font-medium inline-block"
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
    </div>
  );
};

export default Projects;
