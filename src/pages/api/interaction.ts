import type { NextApiRequest, NextApiResponse } from 'next'
import { openDb } from '../../lib/db'
import { trainAndPredict } from '../../lib/ia'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { input } = req.body
      if (!input || typeof input !== 'string') {
        return res.status(400).json({ error: 'Input inválido' });
      }

      const db = await openDb()

      const interactions = await db.all('SELECT input, output FROM interactions')
      console.log('Interações recuperadas:', interactions);

      const result = await trainAndPredict(interactions, input)
      console.log('Resultado da previsão:', result);

      // Salvando a minha interação no banco de dados
      await db.run('INSERT INTO interactions (input, output) VALUES (?, ?)', [input, result])

      let response: string;
      if (result === 'dia bom') {
        response = 'Baseado no que você disse, parece que você teve um dia bom.';
      } else if (result === 'dia ruim') {
        response = 'Baseado no que você disse, parece que você teve um dia ruim.';
      } else {
        response = 'Baseado no que você disse, parece que você teve um dia comum.';
      }

      res.status(200).json({ result: response })
    } catch (error) {
      console.error('Erro na API:', error)
      res.status(500).json({ error: 'Erro interno do servidor', details: error.message })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}