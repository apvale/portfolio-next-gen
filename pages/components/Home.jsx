import styles from '../../styles.module.css'
import Description from './Description'
import Social from './Social'

export default function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <Social />
    </div>
  )
}
