import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";

import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function useActiveLinks() {
  React.useEffect(() => {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const ids = links.map(a => a.getAttribute('href')?.replace('#','')).filter(Boolean);
    const sections = ids.map(id => document.getElementById(id));

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const link = document.querySelector(`.nav-link[href="#${id}"]`);
          if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            link?.classList.add('active');
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useActiveLinks();

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true }); // init AOS
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications/>
      <Education/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
