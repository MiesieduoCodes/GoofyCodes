import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from './context/ThemeProvider'; // Ensure this path is correct

const App = () => {
  return (
    <ThemeProvider> {/* Wrap your application in the ThemeProvider */}
      <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900">
        <div className="container mx-auto px-8"></div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
