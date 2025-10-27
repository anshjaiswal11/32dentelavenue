import React, { useEffect, useRef, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1974&auto=format&fit=crop',
    headline: 'Your Dream Smile, Designed With Care',
    subheadline:
      'At 32 Dental Avenue, a trusted dental clinic in Rohini, we blend precision, passion, and personalized care to craft smiles that radiate confidence and health.',
    primaryLabel: 'Explore Our Services',
    primaryHref: '#services',
    secondaryLabel: 'Meet The Experts',
    secondaryHref: '#team',
  },
  {
    image:
      'https://images.unsplash.com/photo-1588776814546-da63b7f3537a?q=80&w=1974&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1533794299596-8e62c152a450?q=80&w=2070&auto=format&fit=crop',
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
    <section className="relative pt-16 min-h-screen w-full flex items-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out transform scale-105 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${s.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
        ))}
        {/* overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,244,241,0.95)] via-[rgba(247,244,241,0.85)] to-[rgba(247,244,241,0.7)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-left">
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
            aria-live="polite"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-charcoal leading-tight" dangerouslySetInnerHTML={{ __html: slides[current].headline }} />
            <p className="mt-4 text-lg text-text-charcoal max-w-prose">
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

          {/* Pagination dots */}
          {/* <div className="mt-8 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-text-charcoal scale-110' : 'bg-neutral-white/60'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero;
