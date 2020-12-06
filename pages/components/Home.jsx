import styles from '../../styles.module.css'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.presentation}>
            <h1>Hi, I am Ana, and I’m a Frontend Engineer</h1>
          </div>
          <div className={styles.social}>
            <ul>
              <li>
                <FaTwitter size={30} />
              </li>
              <li>
                <FaInstagram size={30} />
              </li>
              <li>
                <FaLinkedin size={30} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.avatar}>
          <Image
            alt="ana-avatar"
            src="/ana-avatar.jpg"
            width={243}
            height={243}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
