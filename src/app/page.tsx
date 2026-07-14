'use client';

import Hero from '@/components/sections/Hero'
import AboutUs from '@/components/sections/AboutUs'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Specialties from '@/components/sections/Specialties'
import Testimonials from '@/components/sections/Testimonials'
import Previdenciario from '@/components/sections/Previdenciario'

export default function Home() {
  return (
    <main>
      <Hero />
      <Previdenciario />
      <Services />
      <Testimonials />
      <Specialties />
      <AboutUs />
      <Contact />
    </main>
  )
}
