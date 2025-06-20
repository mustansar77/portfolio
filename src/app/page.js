import React from 'react'
import HeroSection from './components/HeroSection'
import About from './about/components/About'
import Process from './components/Process'
import Projects from './components/Projects'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const page = () => {
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

export default page


