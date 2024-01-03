import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import clsx from 'clsx'

const inter = Inter({subsets: ['latin']})
const devMode = process.env.NODE_ENV === 'development'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, devMode && 'debug-screens')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
