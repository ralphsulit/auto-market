import './globals.css';

// ** React Imports
import type { Metadata } from 'next'

// ** Components
import { rubik } from './ui/fonts'


export const metadata: Metadata = {
  title: 'Automarket',
  description: 'Generated by create next app',
}

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
