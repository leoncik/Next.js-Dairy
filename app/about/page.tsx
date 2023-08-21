import AboutArmy from "./AboutArmy";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <h1 className={styles.title}>That&apos;s what I call an about page!</h1>
        <div>
          <p>About</p>
        </div>
      </div>
      <div>
        <AboutArmy />
      </div>
    </>
  );
}
