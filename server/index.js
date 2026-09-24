import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projectsRouter from './routes/projects.js';
import skillsRouter from './routes/skills.js';
import statusRouter from './routes/status.js';
import contactRouter from './routes/contact.js';
import analyticsRouter from './routes/analytics.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration (allow frontend origin)
app.use(cors({
  origin: '*', // can be restricted to ['http://localhost:5173', 'https://your-domain.vercel.app']
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
}));

// Body parsers
app.use(express.json());
app.use(express.text({ type: '*/*' })); // For navigator.sendBeacon raw payload

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Ade Dermawan Portfolio API',
    time: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/status', statusRouter);
app.use('/api/contact', contactRouter);
app.use('/api/analytics', analyticsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`  PORTFOLIO BACKEND RUNNING ON PORT ${PORT}`);
  console.log(`  API Health: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});
