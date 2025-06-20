"use client";

import { useEffect } from "react";
import HeroSection from './HeroSection';

import Process from './Process';
import Projects from './Projects';
import Service from './Service';
import Testimonials from './Testimonials';
import Contact from './Contact';
import About from "../about/components/About";

const PageContent = () => {
  useEffect(() => {
    // Scroll to top only on first load
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      history.replaceState(null, "", "/");
    });
  }, []);
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about" className="scroll-mt-[80px]">
        <About />
      </section>
      <section id="process" className="scroll-mt-[80px]">
        <Process />
      </section>
      <section id="projects" className="scroll-mt-[80px]">
        <Projects />
      </section>
      <section id="services" className="scroll-mt-[80px]">
        <Service />
      </section>
      <section id="testimonials" className="scroll-mt-[80px]">
        <Testimonials />
      </section>
      <section id="contact" className="scroll-mt-[80px]">
        <Contact />
      </section>
    </>
  )
}

export default PageContent








