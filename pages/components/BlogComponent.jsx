import styles from "../../styles/styles.module.css";
import Header from "./Header.jsx";

const BlogComponent = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.about}>
        <div className={styles["about-content"]}>
          <p>I swear I'm working on this</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
