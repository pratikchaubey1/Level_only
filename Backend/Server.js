const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require('./Config/DB');
const UserRouter = require('./Routers/UserRouter');
const ProductRouter = require('./Routers/ProductRouter');
const AdminRouter = require('./Routers/AdminRouter');

connectdb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/admin', AdminRouter);

app.get('/', (request, response) => {
  response.send("Hello Level we are here");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
