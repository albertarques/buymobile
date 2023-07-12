import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobiles retro',
  description: 'Tu tienda de móviles retro',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={[inter.className + " justify-center"]}>
        <Header />
        {children}
      </body>
    </html>
  )
}
