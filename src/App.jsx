import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import Education from "./sections/Education.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
 import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="education">
          <Education />
        </section>

      <section id="skills">
          <Skills />
        </section>

           <section id="projects">
          <Projects />
        </section> 

        <section id="experience">
          <Experience />
        </section>

       <section id="contact">
          <Contact />
        </section> 
      </main>
    </>
  );
}

export default App;
