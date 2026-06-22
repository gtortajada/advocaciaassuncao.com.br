import type { Metadata } from "next"
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import { Providers } from "@/app/providers"
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
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
_linkedin_partner_id = "10418265";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=10418265&fmt=gif"
          />
        </noscript>
        <Providers>
          <WebsiteLayout>
            {children}
          </WebsiteLayout>
        </Providers>
      </body>
    </html>
  )
}
