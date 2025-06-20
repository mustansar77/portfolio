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
      <HeroSection />
      <About />
      <Process />

      <Projects />
      <Service />
      <Testimonials />
      <Contact />


    </>
  )
}

export default page