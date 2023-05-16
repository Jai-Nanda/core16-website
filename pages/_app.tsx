import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import { useRouter } from 'next/router'
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(50)
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    });
  }, [])
  
  return <> <ThemeProvider attribute='class'> <style jsx global>{`
  html {
    font-family: ${montserrat.style.fontFamily};
  }
`}</style>

<LoadingBar
        color='#f26227'
        height={3}
        waitingTime={250}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> <Navbar/> <Component {...pageProps} /> </ThemeProvider> <Footer/>
</>
}
