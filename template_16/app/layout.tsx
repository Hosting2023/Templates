import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Didact_Gothic } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const gothic = Didact_Gothic({weight: ['400'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>{children}</body>
    </html>
  )
}