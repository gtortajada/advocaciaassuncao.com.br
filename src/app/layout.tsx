import './globals.css';
import type { Metadata } from "next";
import dynamic from 'next/dynamic';

const ClientRoot = dynamic(() => import('./client-root'), {ssr: false});

export const metadata: Metadata = {
  title: "Advocacia Assunção | Advocacia Trabalhista Bancária", // título que aparece na aba do navegador.
  description: "Advocacia Assunção", // descrição para mecanismos de busca.
  keywords: ["advocacia trabalhista", "advogado trabalhista", "advocacia", "advocacia assunção", // palavras-chaves para SEO.
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ClientRoot>{children}</ClientRoot>
  );
}

