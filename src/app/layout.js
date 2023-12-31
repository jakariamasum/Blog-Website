import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ThemContextProvider } from '@/context/ThemeContext'
import ThemeProviders from '@/providers/ThemeProviders'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemContextProvider>
          <ThemeProviders>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
          </ThemeProviders>
        </ThemContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
