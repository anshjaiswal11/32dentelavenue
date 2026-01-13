import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

// Lazy load pages and heavy components
// const HomePage = lazy(() => import('./pages/HomePage')) // REMOVED: HomePage is defined locally
// The original file had a `HomePage` component DEFINED inside App.jsx (lines 31-46).

// Let's lazy load the other pages first.
const AboutUsPage = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const International = lazy(() => import('./components/International'))
const International2 = lazy(() => import('./components/international2'))
const Cosmetic = lazy(() => import('./components/services/Cosmetic'))
const TeethAlignment = lazy(() => import('./components/services/TeethAlignment'))
const WisdomTooth = lazy(() => import('./components/services/WisdomTooth'))
const RootCanal = lazy(() => import('./components/services/Root-cannel'))
const DentalImplants = lazy(() => import('./components/services/Dentel-implants'))
const OralHygiene = lazy(() => import('./components/services/oralhygiene'))
const Pediatric = lazy(() => import('./components/services/Pediatric'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Gallery = lazy(() => import('./pages/Gallery'))
const ContactUs = lazy(() => import('./pages/contactus'))
const Admin = lazy(() => import('./pages/admin'))

import Hero from './components/Hero'
import Banner from './components/banner'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Faq from './components/Faq'
import AppointmentBooking from './components/Booking'
import Testimonials from './components/Testimonals'
import LatestBlogs from './components/latestnblogs'

function HomePageContent() {
  return (
    <>
      <Helmet>
        <title>Best Dental Clinic in Rohini | 32 Dental Avenue</title>
        <meta name="description" content="32 Dental Avenue is a top-rated dental clinic in Rohini offering advanced dental treatments, implants, braces & emergency care. Book your smile consultation today!" />
        <link rel="canonical" href="https://www.32dentalavenue.in/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "32 Dental Avenue",
              "image": "https://www.32dentalavenue.in/logo.png", 
              "url": "https://www.32dentalavenue.in/",
              "telephone": "+919810850024", 
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-9/4, Sector-7, Rohini",
                "addressLocality": "Delhi",
                "postalCode": "110085",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.7041,
                "longitude": 77.1025
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/32DentalAvenue",
                "https://www.instagram.com/32dentalavenue"
              ]
            }
          `}
        </script>
      </Helmet>
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen w-full bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/international-clients" element={<International />} />
            <Route path="/international-2" element={<International2 />} />
            <Route path="/cosmetic-dentistry" element={<Cosmetic />} />
            <Route path="/teeth-alignment" element={<TeethAlignment />} />
            <Route path="/wisdom-tooth-surgery" element={<WisdomTooth />} />
            <Route path="/root-canal-treatment" element={<RootCanal />} />
            <Route path="/dental-implants" element={<DentalImplants />} />
            <Route path="/oral-hygiene" element={<OralHygiene />} />
            <Route path="/pediatric-dentistry" element={<Pediatric />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
