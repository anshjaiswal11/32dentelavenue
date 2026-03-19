import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ThankYou() {
  useEffect(() => {
    const AW_ID = 'AW-18001923711'
    const hasScript = !!document.querySelector(`script[src*="${AW_ID}"]`)

    // Ensure dataLayer and gtag helper exist
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments) }

    if (!hasScript) {
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`
      document.head.appendChild(s)

      // Initialize after script added
      window.gtag('js', new Date())
      window.gtag('config', AW_ID)
    } else {
      // If present, ensure config is called so conversions work
      window.gtag('config', AW_ID)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-white p-6">
      <Helmet>
        <title>Thank You | 32 Dental Avenue</title>
        <meta name="description" content="Thank you for contacting 32 Dental Avenue. We'll get back to you soon." />
        <script>
          {`window.dataLayer = window.dataLayer || []; window.dataLayer.push({event: 'booking_complete', event_category: 'engagement', event_label: 'thank_you_booking'});`}
        </script>
      </Helmet>

      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary-teal/10 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-raleway">Thank you for your booking!</h1>
        <p className="text-lg text-gray-600 mb-6 font-raleway">We have received your booking and will contact you shortly to confirm the appointment. If you need to change anything, please reach out to us via the contact page.</p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="inline-block bg-secondary-teal text-white px-6 py-3 rounded-full font-raleway shadow hover:bg-[#6bc2b9] transition">Back to Home</Link>
          <Link to="/contact-us" className="inline-block border border-[#e5e7eb] px-6 py-3 rounded-full text-text-charcoal font-raleway">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
