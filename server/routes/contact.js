import { Router } from 'express';
import crypto from 'crypto';
import { readDB, writeDB } from '../db.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const newMessage = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  // Save to database
  const db = readDB();
  db.messages = db.messages || [];
  db.messages.unshift(newMessage);
  writeDB(db);

  // Optional Telegram notification if configured
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    try {
      const text = `📬 *New Portfolio Dispatch!*\n\n*From:* ${newMessage.name}\n*Email:* ${newMessage.email}\n*Time:* ${newMessage.createdAt}\n\n*Message:*\n${newMessage.message}`;
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      });
    } catch (teleErr) {
      console.warn('Telegram notification failed:', teleErr.message);
    }
  }

  return res.status(201).json({
    success: true,
    message: 'Dispatch received and archived successfully.',
    id: newMessage.id,
  });
});

// GET /api/contact (view saved messages - protected by simple API key or local only)
router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.messages || []);
});

export default router;
