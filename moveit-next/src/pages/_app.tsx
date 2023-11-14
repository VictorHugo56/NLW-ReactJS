import '@/styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}
