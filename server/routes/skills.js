import { Router } from 'express';
import { readDB } from '../db.js';

const router = Router();

// GET /api/skills
router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.skills || []);
});

export default router;
