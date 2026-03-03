import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const SECRET_KEY = 'super-secret-key-for-legend-admin'; // In a real app, use env var

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));

const DATA_FILE = path.join(__dirname, 'data.json');

// Helper to read data
const readData = () => {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
};

// Helper to write data
const writeData = (data: any) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

// Middleware to verify JWT
const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// API: Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'legend2026') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '2h' });
    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 2 * 60 * 60 * 1000 // 2 hours
    });
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// API: Check Auth
app.get('/api/check-auth', verifyToken, (req, res) => {
  res.json({ authenticated: true });
});

// API: Logout
app.post('/api/logout', (req, res) => {
  res.clearCookie('admin_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
  });
  res.json({ success: true });
});

// API: Get Data (Public)
app.get('/api/data', (req, res) => {
  res.json(readData());
});

// API: Update Data (Protected)
app.put('/api/data', verifyToken, (req, res) => {
  try {
    const currentData = readData();
    const newData = { ...currentData, ...req.body };
    writeData(newData);
    res.json({ success: true, data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
