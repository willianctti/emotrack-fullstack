import type { NextApiRequest, NextApiResponse } from 'next'
import { openDb } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await openDb()
      const history = await db.all('SELECT * FROM interactions ORDER BY created_at DESC LIMIT 10')
      res.status(200).json(history)
    } catch (error) {
      console.error('Error fetching history:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}