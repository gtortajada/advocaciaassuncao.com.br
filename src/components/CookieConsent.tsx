'use client'

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import './CookieConsent.css'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    _linkedin_partner_id?: string
    _linkedin_data_partner_ids?: string[]
  }
}

const LINKEDIN_PARTNER_ID = '10418265'
const LINKEDIN_SCRIPT_ID = 'linkedin-insight-script'

function updateGtagConsent(marketingGranted: boolean) {
  if (typeof window.gtag !== 'function') return

  window.gtag('consent', 'update', {
    analytics_storage: marketingGranted ? 'granted' : 'denied',
    ad_storage: marketingGranted ? 'granted' : 'denied',
  })
}

function injectLinkedInInsightTag() {
  if (document.getElementById(LINKEDIN_SCRIPT_ID)) return

  window._linkedin_partner_id = LINKEDIN_PARTNER_ID
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID)

  const script = document.createElement('script')
  script.id = LINKEDIN_SCRIPT_ID
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
  document.body.appendChild(script)
}

function handleConsent(cookie: CookieConsent.CookieValue) {
  const marketingGranted = cookie.categories.includes('marketing')

  updateGtagConsent(marketingGranted)

  if (marketingGranted) {
    injectLinkedInInsightTag()
  }
}

export function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'bar',
          position: 'bottom',
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: 'box',
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        marketing: {
          enabled: false,
        },
      },
      language: {
        default: 'pt',
        translations: {
          pt: {
            consentModal: {
              title: 'Sua privacidade',
              description:
                'Usamos cookies para melhorar sua experiência em nosso site. Saiba os detalhes em nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e nossos <a href="/termos-de-uso">Termos de Uso</a>.',
              acceptAllBtn: 'Continuar e fechar',
            },
            preferencesModal: {
              title: 'Preferências de cookies',
              acceptAllBtn: 'Aceitar',
              acceptNecessaryBtn: 'Rejeitar',
              savePreferencesBtn: 'Salvar preferências',
              closeIconLabel: 'Fechar',
              sections: [
                {
                  title: 'Cookies necessários',
                  description: 'Necessários para o funcionamento do site. Não podem ser desativados.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Cookies de marketing',
                  description:
                    'Usados pelo Google (GA4/Ads) e pelo LinkedIn Insight Tag para análise de audiência e publicidade.',
                  linkedCategory: 'marketing',
                },
              ],
            },
          },
        },
      },
      onConsent: ({ cookie }) => {
        handleConsent(cookie)
      },
      onFirstConsent: ({ cookie }) => {
        handleConsent(cookie)
      },
      onChange: ({ cookie }) => {
        handleConsent(cookie)
      },
    })
  }, [])

  return null
}
