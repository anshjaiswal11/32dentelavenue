import React from 'react'
import Hero from '../components/home2/hero'
import Banner from '../components/home2/banner'
import Testimonials from '../components/home2/test'
import Services from '../components/home2/ser'
import CDATASection from '../components/home2/ctaa'
import AboutSection from '../components/home2/about'
import TeamSection from '../components/home2/team'
import AppointmentBooking from '../components/home2/booking'

function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Testimonials />
      <Services />
      <CDATASection/>
      <AboutSection/>
      <TeamSection/>
      <AppointmentBooking/>
    </div>
  )
}

export default Home
