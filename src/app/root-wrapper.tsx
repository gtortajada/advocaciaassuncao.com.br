'use client'
import { ReactNode } from 'react'

export function RootWrapper({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}