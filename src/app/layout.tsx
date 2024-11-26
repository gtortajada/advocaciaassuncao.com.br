'use client'

import './globals.css';
// import type { Metadata } from "next";
import Navbar from '../components/NavBar';
import Footer from '/home/gtortajada/Documents/2024/jobs/advocaciaassuncao.com.br/src/components/Footer';
// import FloatingButton from '../components/FloatingButton';
import { Providers } from './providers';

// export const metadata: Metadata = {
//   title: "Advocacia Assunção",
//   description: "Advocacia Assunção",
// };

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body >
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