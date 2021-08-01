import {useState} from 'react'
import styles from '../../styles/styles.module.css'
import {FaBars, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }

  const cx = (...classNames) => classNames.join(' ')

  return (
    <div>
      <div className={styles.container}>
        <nav>
          <button
            className={styles.hamburguer}
            id="hamburguer"
            onClick={showMenu}
          >
            <FaBars size={30} />
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
            <li>
              <a className={styles['nav-link']} href="/blog">
                BLOG
              </a>
            </li>
            <li>
              <a className={styles['nav-link']} href="/contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <section className={styles.maindescription}>
          <div className={styles.avatar}>
            <Image
              alt="ana-avatar"
              src="/ana-avatar-2.jpg"
              width="300"
              height="300"
            />
          </div>
          <div className={styles.description}>
            <div className={styles.presentation}>
              <h1>Hi, I am Ana, and I’m a Frontend Engineer</h1>
            </div>
          </div>
          <ul className={styles.social}>
            <li className={styles['social-item']}>
              <a
                className={styles['social-link']}
                href="https://twitter.com/apvale"
              >
                <FaTwitter size={30} />
              </a>
            </li>
            <li className={styles['social-item']}>
              <a
                className={styles['social-link']}
                href="https://www.instagram.com/aninhalvale/"
              >
                <FaInstagram size={30} />
              </a>
            </li>
            <li className={styles['social-item']}>
              <a
                className={styles['social-link']}
                href="https://www.linkedin.com/in/anapaulavale/"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
