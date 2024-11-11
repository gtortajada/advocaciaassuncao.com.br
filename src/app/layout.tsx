import './globals.css';

import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import FloatingButton from 'components/FloatingButton';

import { Provider } from 'components/ui/provider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Advocacia Assunção",
  description: "Advocacia Assunção",
};

export default function Layout({ children, 
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <html lang="pt-br">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          {children}
          <Footer />
          <FloatingButton />
        </body>
      </html>
    </Provider>
  )
}

// export default function RootLayout({children,}: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//   
//   );
// }
