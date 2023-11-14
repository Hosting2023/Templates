//import './globals.css'
import '../styles/app.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fullstack Test',
  description: 'Cleaning service created as test task',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
