import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import  { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  return <> <ThemeProvider attribute='class'> <style jsx global>{`
  html {
    font-family: ${montserrat.style.fontFamily};
  }
`}</style>

 <Navbar/> <LoadingBar color='#f11946' /> <Component {...pageProps} /> </ThemeProvider> <Footer/>
</>
}
