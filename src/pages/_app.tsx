import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import GlobalStyles from '../styles/global';
import 'aos/dist/aos.css'
import AOS from 'aos';
function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    AOS.init() 
   },[]) 
  return (
  <>
  <GlobalStyles/>
  <Component {...pageProps} />
  </>
  )
}

export default App
