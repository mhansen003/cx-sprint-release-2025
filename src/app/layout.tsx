import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CX Sprint 2026.01.28 Release Notes | CMG Home Loans',
  description: 'Consumer Experience Sprint Release Notes featuring SmartApp, Home Portal, and Servicing enhancements',
  openGraph: {
    title: 'CX Sprint 2026.01.28 Release Notes',
    description: 'Explore the latest features and improvements in the CMG Consumer Experience platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid`}>{children}</body>
    </html>
  )
}
