import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Insights from "./components/Insights";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white scroll-smooth">
        <Hero />
        <AboutMe />
        <Projects />
        <Certifications />
        <Insights/>
        <Contact />
      </div>
    </>
  );
};

export default App;
