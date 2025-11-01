
import React, { useEffect, useRef, useState } from 'react'
import slide2 from '../../assets/images/slide2.png'

// IMAGE SIZE GUIDE:
// Desktop: 1920x1080px (16:9 ratio)
// Mobile: 828x1792px
// Format: WebP/JPG
// Quality: 85%
// Max file size: 500KB


const slides = [
  {
    image:
      'https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    headline: 'Your Dream Smile, Designed With Care',
    subheadline:
      'At 32 Dental Avenue, a trusted dental clinic in Rohini, we blend precision, passion, and personalized care to craft smiles that radiate confidence and health.',
    primaryLabel: 'Explore Our Services',
    primaryHref: '#services',
    secondaryLabel: 'Meet The Experts',
    secondaryHref: '#team',
  },
  {
    image: slide2,
    headline: 'Premium Dental Care Made Accessible',
    subheadline:
      'Experience world-class dental care powered by advanced technology, modern techniques, and a state-of-the-art clinic designed for your comfort.',
    primaryLabel: 'Book a Visit',
    primaryHref: '#book',
    secondaryLabel: 'Explore Our Services',
    secondaryHref: '#services',
  },
  {
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    headline: 'Redefining Dental Tourism in India',
    subheadline:
      'Travel with confidence knowing your smile is in expert hands. Experience advanced technology, world-class expertise, and luxury care at affordable costs.',
    primaryLabel: 'Explore Packages',
    primaryHref: '#packages',
    secondaryLabel: 'Meet The Experts',
    secondaryHref: '#team',
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    // auto-advance every 3s
    intervalRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length)
    }, 3000)

    return () => clearInterval(intervalRef.current)
  }, [])

  // text crossfade when current changes
  useEffect(() => {
    setTextVisible(false)
    const t = setTimeout(() => setTextVisible(true), 450) // match duration
    return () => clearTimeout(t)
  }, [current])

  return (
    // Main hero section container
    // CUSTOMIZATION:
    // - pt-16: Top padding (adjust if navbar height changes)
    // - min-h-screen: Minimum height (can be changed to specific height)
    <section className="relative pt-16 min-h-screen flex items-center bg-[#F2F1EF]">
  <div className="absolute inset-0">
    {slides.map((s,i)=>(
      <div key={i} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i===current?'opacity-100':'opacity-0'}`} 
        style={{backgroundImage:`url(${s.image})`,filter:'brightness(0.9)'}}>
      </div>
    ))}
    <div className="absolute inset-0 bg-gradient-to-r from-[#723E31]/60 via-[#A67564]/40 to-transparent" />
  </div>

  <div className="relative z-10 max-w-3xl px-6 mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-[#F2F1EF] drop-shadow-lg mb-4">{slides[current].headline}</h1>
    <p className="text-lg text-[#F2F1EF]/90 mb-8">{slides[current].subheadline}</p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a href={slides[current].primaryHref} className="bg-[#D9B18E] text-[#F2F1EF] px-8 py-3 rounded-lg font-semibold hover:bg-[#A67564] transition-all">
        {slides[current].primaryLabel}
      </a>
      <a href={slides[current].secondaryHref} className="bg-[#F2F1EF] text-[#723E31] px-8 py-3 rounded-lg font-semibold hover:bg-[#D9D2CC] transition-all">
        {slides[current].secondaryLabel}
      </a>
    </div>
  </div>
</section>

  )
}

export default Hero;
