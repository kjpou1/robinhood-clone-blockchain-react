import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { RobinhoodProvider } from '../context/RobinhoodContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp