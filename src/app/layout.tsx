'use client'

import './globals.css';
// import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
// import FloatingButton from '../components/FloatingButton';
import { Providers } from './providers';

// export const metadata: Metadata = {
//   title: "Advocacia Assunção",
//   description: "Advocacia Assunção",
// };

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const freeSerif = localFont({
  src: [
    {
      path: './fonts/FreeSerif.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-free-serif',
  display: 'swap',
})

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html
    suppressHydrationWarning
    lang="pt-br"
    className={`${montserrat.variable} ${freeSerif.variable}`}
    >
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          {/* <FloatingButton /> */}
        </Providers>
      </body>
    </html>
  )
}