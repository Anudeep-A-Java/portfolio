import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Insights from "./components/Insights";
import Experience from "./components/Experience";
import Education from "./components/Education";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white scroll-smooth">
        <Home />
        <AboutMe />
        <Experience/>
        <Education/>
        <Projects />
        <Certifications />
        <Insights/>
        <Contact />
      </div>
    </>
  );
};

export default App;
