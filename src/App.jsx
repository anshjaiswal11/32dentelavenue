import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/banner'
import Services from './components/Services'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Banner />
        <Services/>
        <AboutSection/>
      </div>
    </BrowserRouter>
  )
}

export default App
