import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '90\'s Mobile',
  description: 'Your retro smartphone shop ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className + " justify-center"]}>
        <Header />
        {children}
      </body>
    </html>
  )
}
