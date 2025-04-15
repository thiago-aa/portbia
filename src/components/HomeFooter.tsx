import styles from "../styles/HomeFooter.module.css";

export default function HomeFooter () {

  return (
  <div className={styles.footerContainer}>
    <h2>Artista . Ilustradora . Design Gráfico</h2>
    <div>
      <a href=""><img src="/wpp.svg" alt="" /></a>
      <a href=""><img src="/mail.svg" alt="" /></a>
      <a href=""><img src="/instagram.svg" alt="" /></a>
    </div>
  </div>
)
}