import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  return <> <style jsx global>{`
  html {
    font-family: ${montserrat.style.fontFamily};
  }
`}</style>
<Navbar/> <Component {...pageProps} /> </>
}
