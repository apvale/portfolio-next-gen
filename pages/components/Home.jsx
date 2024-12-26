import styles from "../../styles/styles.module.css";
import Image from "next/image";
import Header from "./Header.jsx";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <section className={styles.maindescription}>
          <div>
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
          </div>
          <ul className={styles.social}>
            <li className={styles["social-item"]}>
              <a
                className={styles["social-link"]}
                href="https://twitter.com/apvale"
              >
                <FaTwitter size={30} />
              </a>
            </li>
            <li className={styles["social-item"]}>
              <a
                className={styles["social-link"]}
                href="https://www.instagram.com/aninhalvale/"
              >
                <FaInstagram size={30} />
              </a>
            </li>
            <li className={styles["social-item"]}>
              <a
                className={styles["social-link"]}
                href="https://www.linkedin.com/in/anapaulavale/"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
