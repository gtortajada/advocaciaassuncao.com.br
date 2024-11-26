'use client'

import Hero from '../components/sections/Hero'
import AboutUs from '../components/sections/AboutUs'
import Services from '../components/sections/Services'
import Contact from '../components/sections/Contact'
import Specialties from '@/components/sections/Specialties'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Specialties />
      <AboutUs />
      <Contact />
    </main>
  )
}