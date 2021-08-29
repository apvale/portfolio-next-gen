import styles from '../../styles/styles.module.css'
import Header from './Header.jsx'

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.about}>
        <h1 className={styles['about-title']}>About me</h1>
        <div className={styles['about-content']}>
          <p>
            Hi, I'm Ana and I'm Frontend Engineer. This became my career
            development goal after I transitioned from QA Engineer.
          </p>
          <p>
            As QA I have always been communicative, observant, detail oriented
            and always wanting to create the best and most functional software.
            When migrating to another profession in the same area, such as
            Software Engineer, with allied QA skills, I feel like a became a
            more complete professional to create the best of both worlds,
            building quality software.
          </p>
          <p>
            Working with development has always been part of my life even as a
            person in the Software Testing area, as I was already applying test
            automation in every company I've been through, as I've always been
            passionate about it and saw the value in having automated
            applications.
          </p>
          <p>
            <strong>Skills summary:</strong> Team player, excellent
            communication, problem-solving, Detailed, human, organized, Real
            passionate in what I'm working on, I love what I do xD
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
