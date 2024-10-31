const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 border-b border-neutral-900 pb-16">
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
    </div>
  );
};

export default Contact;
