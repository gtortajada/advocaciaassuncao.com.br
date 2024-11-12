import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocacia Assunção",
  description: "Advocacia Assunção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body id='body'>    
        {children}
      </body>
    </html>
  );
}
