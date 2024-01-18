import express, { Router, Request, Response } from 'express';
import pool from '../db';

const router: Router = express.Router();

router.get('/users', async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;