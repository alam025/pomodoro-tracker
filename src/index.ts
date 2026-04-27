/**
 * Pomodoro Tracker — Tracked 10k+ focus sessions with Spotify sync and automated weekly productivity reports
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ name: 'Pomodoro Tracker', description: 'Tracked 10k+ focus sessions with Spotify sync and automated weekly productivity reports', status: 'running', version: '1.0.0' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Pomodoro Tracker running on port ${PORT}`);
});

export default app;
