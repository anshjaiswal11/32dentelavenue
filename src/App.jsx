import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/banner'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import AppointmentBooking from './components/Booking'
import Testimonials from './components/Testimonals'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Banner />
        <Testimonials/>
        <Services/>
        <AboutSection/>
        <TeamSection/>
        <CTASection/>
        <AppointmentBooking/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
