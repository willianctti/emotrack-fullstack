import InteractionForm from '../components/InteractionForm';
import HistoryList from '../components/HistoryList';
import styles from "./page.module.css";
import Image from 'next/image';

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
      <div className={styles.container}>
      <Image src="/emotrack.jpg" alt="Logo" width={300} height={300} />
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