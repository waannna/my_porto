import { Router } from 'express';
import { readDB, writeDB } from '../db.js';

const router = Router();

// GET /api/status
router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.status || { status: 'Open to project collaborations and freelance work.' });
});

// PATCH /api/status (update current status)
router.patch('/', (req, res) => {
  const { status } = req.body;
  if (!status || typeof status !== 'string') {
    return res.status(400).json({ error: 'Status text is required.' });
  }

  const db = readDB();
  db.status = {
    status: status.trim(),
    updatedAt: new Date().toISOString(),
  };

  writeDB(db);
  res.json({ success: true, status: db.status });
});

export default router;
