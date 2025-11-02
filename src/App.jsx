import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import AboutUsPage from './pages/About'
import Home from './pages/Home'


function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <Testimonials/>
      <Services/>
      <CTASection/>
      <AboutSection/>
      <TeamSection/>
      <AppointmentBooking/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
