import { experience } from "../../constants/Experience";
import { motion } from "framer-motion";

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

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 border-b border-neutral-900 pb-16">
      <motion.h2
        transition={{}}
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="my-10 text-center text-3xl md:text-5xl text-white"
      >
        Exper<span className="text-neutral-400">iences</span>
      </motion.h2>
      <div>
        {experience.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center mb-10 md:mb-20"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/3 p-4 md:p-8 flex justify-center"
            >
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-3/4 xl:w-1/2"
              >
                <img
                  src={experience.image}
                  className="rounded-lg w-full max-w-xl lg:max-w-3xl shadow-lg hover:scale-105 transition duration-300"
                  alt={experience.title}
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-4 items-center flex flex-col justify-center md:p-8"
            >
              <div className="w-full max-w-xl">
                <h6 className="mb-2 text-lg font-semibold md:text-xl text-white">
                  {experience.title}
                </h6>
                <p className="mb-4 text-neutral-400 text-sm md:text-base">
                  {experience.description}
                </p>
                <div>
                  {experience.technologies.map((tech, index) => (
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
    </div>
  );
};

export default Experience;
