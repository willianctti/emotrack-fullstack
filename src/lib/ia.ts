import * as brain from 'brain.js';
import { openDb } from './db';

const net = new brain.recurrent.LSTM();

const initialTrainingData = [
  { input: 'Hoje foi um dia muito ruim, me sinto cansado e estressado.', output: 'dia ruim' },
  { input: 'Estou me sentindo péssimo, nada deu certo.', output: 'dia ruim' },
  { input: 'Hoje foi um dia excelente, me sinto muito bem.', output: 'dia bom' },
  { input: 'Estou feliz, tudo correu como planejado.', output: 'dia bom' },
  { input: 'Foi um dia normal, nada de especial aconteceu.', output: 'dia comum' }
];

export async function trainAndPredict(input: string) {
  const db = await openDb();
  const interactions = await db.all('SELECT input, output FROM interactions');
  const trainingData = [...initialTrainingData, ...interactions].filter(item => item.input && item.output);

  if (trainingData.length === 0) {
    console.error('Não há dados de treinamento válidos');
    return 'dia comum';
  }

  try {
    await net.train(trainingData, {
      iterations: 2000,
      errorThresh: 0.005,
      log: true,
      logPeriod: 100,
      learningRate: 0.01
    });

    const result = net.run(input);
    return interpretResult(result);
  } catch (error) {
    console.error('Erro durante o treinamento ou previsão:', error);
    return 'dia comum';
  }
}

function interpretResult(result: string): string {
  if (typeof result !== 'string') {
    console.error('Resultado inesperado:', result);
    return 'dia comum';
  }
  if (result.includes('dia bom')) {
    return 'dia bom';
  } else if (result.includes('dia ruim')) {
    return 'dia ruim';
  } else {
    return 'dia comum';
  }
}