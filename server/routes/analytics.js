import { Router } from 'express';
import crypto from 'crypto';
import { readDB, writeDB } from '../db.js';

const router = Router();

// POST /api/analytics/click
router.post('/click', (req, res) => {
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { event, label, timestamp, url } = body || {};

  const record = {
    id: crypto.randomUUID(),
    event: event || 'click',
    label: label || 'unknown',
    timestamp: timestamp || new Date().toISOString(),
    url: url || '',
    ip: req.ip || req.headers['x-forwarded-for'] || '',
  };

  const db = readDB();
  db.clicks = db.clicks || [];
  // Keep last 500 click logs
  db.clicks.unshift(record);
  if (db.clicks.length > 500) {
    db.clicks = db.clicks.slice(0, 500);
  }
  writeDB(db);

  res.status(204).end();
});

// GET /api/analytics/stats
router.get('/stats', (req, res) => {
  const db = readDB();
  const clicks = db.clicks || [];

  // Group by label count
  const summary = clicks.reduce((acc, curr) => {
    acc[curr.label] = (acc[curr.label] || 0) + 1;
    return acc;
  }, {});

  res.json({
    totalClicks: clicks.length,
    clicksByItem: summary,
    recentClicks: clicks.slice(0, 20),
  });
});

export default router;
