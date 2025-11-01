import React, { useEffect, useRef, useState } from 'react'
import slide2 from '../assets/images/slide2.png'

const slides = [
  {
    image:
      'https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470',
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
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470',
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
    intervalRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    setTextVisible(false)
    const t = setTimeout(() => setTextVisible(true), 450)
    return () => clearTimeout(t)
  }, [current])

  return (
    <section className="relative pt-16 min-h-screen w-full flex items-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${s.image}')`,
              filter: 'brightness(0.9) contrast(1.05) saturate(1.05)',
            }}
          />
        ))}

        {/* Overlay gradient — stronger for mobile, lighter for desktop */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Mobile overlay (stronger for visibility) */}
          <div className="block md:hidden w-full h-full bg-[rgba(0,0,0,0.55)]"></div>
          {/* Desktop overlay (slightly lighter) */}
          <div
            className="hidden md:block w-full h-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.10) 100%)',
            }}
          ></div>
        </div>
      </div>

      {/* Text content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-left">
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]"
              dangerouslySetInnerHTML={{ __html: slides[current].headline }}
            />
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-prose">
              {slides[current].subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={slides[current].primaryHref}
                className="inline-block bg-secondary-teal text-neutral-white font-semibold px-8 py-4 rounded-lg hover:bg-secondary-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                {slides[current].primaryLabel}
              </a>
              <a
                href={slides[current].secondaryHref}
                className="inline-block bg-neutral-white text-text-charcoal font-semibold px-8 py-4 rounded-lg hover:bg-border-subtle transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                {slides[current].secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
