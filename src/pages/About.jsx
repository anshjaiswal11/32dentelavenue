import React from 'react'
import Hero from '../components/about/Hero'
import DentalJourney from '../components/about/DentalJourney'
import Dentaljourneytwo from '../components/about/Dentaljourneytwo'
import Expert from '../components/about/Experts'
import AboutSection from '../components/AboutSection'
import Testimonials from '../components/Testimonals'
import VisionMission from '../components/about/Visionmission'

function About() {
  return (
    <div>
      <Hero />
      <DentalJourney />
      {/* <Dentaljourneytwo /> */}
      <Expert/>
      <AboutSection />
      <Testimonials />
      <VisionMission/>
    </div>
  )
}

export default About
