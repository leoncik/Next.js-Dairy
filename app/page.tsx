import PostsList from "./components/PostsList/PostsList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Welcome on my personal dairy 🧀</h1>
        <PostsList />
      </div>
    </main>
  );
}
