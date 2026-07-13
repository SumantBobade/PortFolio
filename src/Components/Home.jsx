import React from 'react'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import TechStack from './TechStack'
import CareerInterests from './CareerInterests'
import Leadership from './Leadership'
import CurrentlyLearning from './CurrentlyLearning'
import Projects from './Projects'
import ContactMe from './ContactMe'
import ClosingCTA from './ClosingCTA'

function Home() {
  return (
      <>
          <Hero/>
          <About />
          <Projects />
          <ContactMe />
          <ClosingCTA/>
    </>
  )
}

export default Home
