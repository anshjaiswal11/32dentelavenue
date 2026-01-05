import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/banner'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Faq from './components/Faq'
import AppointmentBooking from './components/Booking'
import Testimonials from './components/Testimonals'
import Footer from './components/Footer'
import AboutUsPage from './pages/About'
import Home from './pages/Home'
import International from './components/International'
import International2 from './components/international2'
import Cosmetic from './components/services/Cosmetic'
import TeethAlignment from './components/services/TeethAlignment'
import WisdomTooth from './components/services/WisdomTooth'

import RootCanal from './components/services/Root-cannel'
import DentalImplants from './components/services/Dentel-implants'
import OralHygiene from './components/services/oralhygiene'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'

import ContactUs from './pages/contactus'
import LatestBlogs from './components/latestnblogs'
import Admin from './pages/admin'

function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <Testimonials />
      <Services />
      <CTASection />
      <AboutSection />
      <TeamSection />
      <AppointmentBooking />
      <LatestBlogs />
      <Faq />
    </>
  )
}

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dental-tourism" element={<International />} />
          <Route path="/international-2" element={<International2 />} />
          <Route path="/cosmetic-dentistry" element={<Cosmetic />} />
          <Route path="/teeth-alignment" element={<TeethAlignment />} />
          <Route path="/wisdom-tooth-surgery" element={<WisdomTooth />} />
          <Route path="/root-canal-treatment" element={<RootCanal />} />
          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/oral-hygiene" element={<OralHygiene />} />
          <Route path="/pediatric-dentistry" element={<OralHygiene />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
