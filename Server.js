const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require('./Config/DB');
const UserRouter = require('./Routers/UserRouter');

connectdb();

const app = express();

// CORS (handle preflight too)
const corsOptions = {
  origin: true, // reflect request origin
  credentials: true,
};
app.use(cors(corsOptions));
// Manual preflight handler (Express 5-compatible)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Vary', 'Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, X-Website-Name');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', UserRouter);

app.get('/', (request, response) => {
  response.send("Hello Level we are here");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
