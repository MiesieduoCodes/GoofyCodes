import  { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from './context/ThemeProvider';
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider >
      {isLoading ? (
        <Preloader onLoaded={() => setIsLoading(false)} />
      ) : (
        <div className='flex flex-col '> 
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
