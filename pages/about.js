import styles from '@/styles/About.module.scss'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div>
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