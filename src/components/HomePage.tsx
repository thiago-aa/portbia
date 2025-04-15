import  styles  from '../styles/HomePage.module.css'
import HomeFooter from './HomeFooter'

export default function Home() {
  return (
    <section className={styles.section} id="home">
      <div className={styles.titleContainer}>        
        <div className={styles.title}>
          <h2><span className={styles.ball}></span>Portfólio <span className={styles.ball}></span></h2>
          <h1>Ana Beatriz</h1>
        </div>
      </div>
      <HomeFooter/>
    </section>
  )
}