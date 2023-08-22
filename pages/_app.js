import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider} from 'styled-components'
import Head from 'next/head'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import 'styles/layout.css'
import { SessionProvider } from 'next-auth/react'

const theme = {
  color: {
    primary: '#355C7D'
  }
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<SessionProvider session={session}><Component {...pageProps} /></SessionProvider>)
  }
  return (
    <>
      <Head>
        <title>Coding World</title>
      </Head>
        <SessionProvider session={session}>
          <Header />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          <Footer />
        </SessionProvider>
    </>
  )
}
