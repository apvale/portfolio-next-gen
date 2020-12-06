import styles from '../../styles.module.css'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <Image
            alt="ana-avatar"
            src="/ana-avatar.jpg"
            width={243}
            height={243}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.presentation}>
            <h1>Hi, I am Ana, and I’m a Frontend Engineer</h1>
          </div>
          <div className={styles.social}>
            <ul>
              <li>
                <a href="https://twitter.com/apvale">
                  <FaTwitter size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aninhalvale/">
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anapaulavale/">
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
