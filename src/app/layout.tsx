import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Pool Service - Limpeza e Reparos de Piscinas',
  description: 'Serviços profissionais de limpeza e reparos de piscinas. Garantia de qualidade e satisfação total.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  )
} 