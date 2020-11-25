import styles from '../../styles.module.css'
import Description from './Description'
import Social from './Social'
import Image from './Image'

function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <Social />
      {/* <Image /> */}
    </div>
  )
}

export default Home
