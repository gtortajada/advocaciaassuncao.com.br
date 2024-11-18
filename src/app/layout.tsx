import './globals.css';

import type { Metadata } from "next";
// import localFont from "next/font/local";

// import Navbar from '../components/NavBar';
import Footer from '/home/gtortajada/Documents/2024/jobs/advocaciaassuncao.com.br/src/components/Footer';
import FloatingButton from 'components/FloatingButton';

import { Provider } from 'components/ui/provider';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Advocacia Assunção",
  description: "Advocacia Assunção",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning lang="pt-br"> 
      <body > {/* Estava na tag body: className={`${geistSans.variable} ${geistMono.variable}`}*/}
        {/* <Navbar /> */}
        <Provider>{children}</Provider>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}