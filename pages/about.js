import styles from '../styles/About.module.scss'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Coding</title>
        <meta name='description' content='Free tutorials' />
      </Head>
      <div className={styles.highLightScss}> About Page </div>
      <button className='btn btn-success'>Primary</button>
    </div>
  )
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}