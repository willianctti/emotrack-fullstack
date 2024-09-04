'use client'

import React, { useState } from 'react';
import './styles.css';


export default function InteractionForm() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/interaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    setResult(data.result);
    setInput('');
  };

  return (

    <form onSubmit={handleSubmit} className="interaction-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Como foi seu dia hoje?"
      />
      <button type="submit">Enviar</button>
      {result && <p>{result}</p>}
    </form>

  );
}