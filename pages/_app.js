import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider} from 'styled-components'
import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles/layout.css'

const theme = {
  color: {
    primary: '#355C7D'
  }
}

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Head>
        <title>Coding World</title>
      </Head>
      <Header />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  )
}
