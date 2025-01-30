import './globals.css'
import type { Metadata } from "next"
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import { Providers } from "@/app/providers"
import { WebsiteLayout } from '@/components/WebsiteLayout'

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', rel: 'shortcut icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: "180x180", rel: "apple-touch-icon" }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest"' },
    ]
  },
  title: "Advocacia Assunção",
  description: "Advocacia Assunção"
}

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${freeSerif.variable}`} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Advocacia Assunção" />
      </head>
      <body className={montserrat.className}>
        <Providers>
          <WebsiteLayout>
            {children}
          </WebsiteLayout>
        </Providers>
      </body>
    </html>
  )
}
