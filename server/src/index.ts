import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import generateRouter from './routes/generate';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Production Security Headers
app.use(helmet());

// Strict CORS for production UI
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST']
}));

// Rate Limiting to prevent LLM API billing abuse (e.g. max 10 builds/hour per IP)
const buildLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: 'Too many build requests from this IP, please try again after an hour.' }
});

app.use(express.json());

app.use('/api', buildLimiter, generateRouter);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Shipkraft backend is running with Multi-Agent Pipeline!' });
});

app.listen(PORT as number, '0.0.0.0', () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
