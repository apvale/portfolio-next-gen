import styles from '../../styles/styles.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'

const Header = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }

  const cx = (...classNames) => classNames.join(' ')

  return (
    <nav>
      <button className={styles.hamburguer} id="hamburguer" onClick={showMenu}>
        {active ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      <ul
        className={
          active ? cx(styles.navul, styles['show-menu']) : styles.navul
        }
        id="nav-ul"
      >
        <li>
          <a className={styles['nav-link']} href="/">
            HOME
          </a>
        </li>
        <li>
          <a className={styles['nav-link']} href="/about">
            ABOUT
          </a>
        </li>
        {/* <li>
          <a className={styles['nav-link']} href="/blog">
            BLOG
          </a>
        </li>
        <li>
          <a className={styles['nav-link']} href="/contact">
            CONTACT
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Header
