import InteractionForm from '../components/InteractionForm';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>EmoTracker IA</h1>
      <InteractionForm />
    </main>
  );
}