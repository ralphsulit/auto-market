import './globals.css';

// ** React Imports
import type { Metadata } from 'next'

// ** Components
import { rubik } from '../components/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | AutoMarket',
    default: 'AutoMarket',
  },
  description: 'The official site of AutoMarket',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
