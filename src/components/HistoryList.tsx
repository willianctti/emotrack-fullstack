import React from 'react';
import './styles.css';

interface HistoryItem {
  id: number;
  input: string;
  output: string;
  created_at: string;
}

interface HistoryListProps {
  history: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
  return (
    <div className="history-list">
      <h2>Histórico de Interações</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id} className="history-item">
            <p><strong>Input:</strong> {item.input}</p>
            <p><strong>Resultado:</strong> {item.output}</p>
            <p><strong>Data:</strong> {new Date(item.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;