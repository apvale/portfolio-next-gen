import styles from '../../styles/styles.module.css'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <span>Frontend engineer</span>
      <h1>Hi, I am Ana, and I’m a Frontend Engineer</h1>
      <p>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <div className={styles['intro-buttons']}>
        <button>Resume</button>
        <button className={styles['linkedin-button']}>Linkedin</button>
      </div>
    </div>
  )
}

export default Intro
