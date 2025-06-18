import React from 'react'
import HeroSection from './components/HeroSection'
import About from './about/components/About'
import Process from './components/Process'
import Projects from './components/Projects'
import Service from './components/Service'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Process />

      <Projects />
      <Service />
      <Testimonials />
    </>
  )
}

export default page