import type { Metadata } from "next"
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import { Providers } from "@/app/providers"
import { CookieConsentBanner } from '@/components/CookieConsent'
import { WebsiteLayout } from '@/components/WebsiteLayout'

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', rel: 'shortcut icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: "180x180", rel: "apple-touch-icon" }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
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
        <Script
          id="gtm-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied'
});
window.gtag = gtag;`,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DNVVBDV');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DNVVBDV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CookieConsentBanner />
        <Providers>
          <WebsiteLayout>
            {children}
          </WebsiteLayout>
        </Providers>
      </body>
    </html>
  )
}
