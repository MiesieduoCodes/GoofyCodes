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
      <div>
        <div ></div>
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
