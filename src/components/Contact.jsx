import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const iconVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-teal-900 to-teal-900 border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl text-white">
        Get In <span className="text-neutral-400">Touch</span>
      </h2>
      <div className="mb-8">
        <h1 className="text-lg md:text-xl flex justify-center text-center text-neutral-300 px-4">
          I’d love to hear from you! Whether you have questions, feedback,
          <br /> or just want to say hello, feel free to reach out. Connect with me, and
          <br /> let’s create something amazing together.
        </h1>
      </div>
      <div className="text-center flex flex-col items-center p-6 font-bold text-lg md:text-2xl text-white tracking-tight">
        <p className="my-4 p-2">Nigeria</p>
        <p className="my-4">+234 906 046 2206</p>
        <a href="mailto:Miesieduoveria@gmail.com" className="my-4 underline hover:text-blue-300">
          Miesieduoveria@gmail.com
        </a>
      </div>

      {/* Enhanced Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-cyan-500 text-5xl drop-shadow-lg animate-pulse"
        variants={iconVariants}
        animate="float"
        style={{ filter: "drop-shadow(0 0 10px #0ff)" }}
      >
        <FaMapMarkerAlt />
      </motion.div>
      <motion.div
        className="absolute top-40 right-10 text-yellow-400 text-5xl drop-shadow-lg animate-pulse"
        variants={iconVariants}
        animate="float"
        style={{ filter: "drop-shadow(0 0 10px #ff0)" }}
      >
        <FaPhone />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-pink-400 text-5xl drop-shadow-lg animate-pulse"
        variants={iconVariants}
        animate="float"
        style={{ filter: "drop-shadow(0 0 10px #f0f)" }}
      >
        <FaEnvelope />
      </motion.div>
    </div>
  );
};

export default Contact;
