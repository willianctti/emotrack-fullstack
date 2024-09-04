import InteractionForm from '../components/InteractionForm';
import HistoryList from '../components/HistoryList';
import styles from "./page.module.css";

async function getHistory() {
  const res = await fetch('http://localhost:3000/api/history', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch history');
  }
  return res.json();
}

export default async function Home() {
  const history = await getHistory();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>EmoTracker IA</h1>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <InteractionForm />
        </div>
        <div className={styles.historyContainer}>
          <HistoryList history={history} />
        </div>
      </div>
    </main>
  );
}