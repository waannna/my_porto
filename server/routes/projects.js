import { Router } from 'express';
import { readDB } from '../db.js';

const router = Router();

// GET /api/projects
router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.projects || []);
});

export default router;
