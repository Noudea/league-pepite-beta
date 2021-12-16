import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import GeneralProvider from '../providers/GeneralProviders'

function MyApp ({ Component, pageProps }) {
  return (
    <GeneralProvider>
      <Component {...pageProps} />
    </GeneralProvider>
  )
}

export default MyApp
