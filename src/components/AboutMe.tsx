import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return ( 
    <div className={styles.aboutMeContainer} id="aboutMe">
      <div>
        <div className={styles.imgOutCircle}>
          <div className={styles.imgInternCircle}>
            <img src="/bia.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2>
          Sobre Mim
        </h2>
        <p>
          Sou uma designer apaixonada por criar experiências visuais únicas, transformando ideias em soluções impactantes para o público-alvo. 
        </p>
        <p>
        Sempre atenta às tendências e aos detalhes que fazem a diferença, utilizo ferramentas como Canva, Photoshop e Illustrator, além de habilidades em desenho à mão, para trazer um toque artístico e personalizado a cada projeto.
        </p>
      </div>
    </div>
  )
}