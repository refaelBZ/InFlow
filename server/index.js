require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../server/db');
const expenseRouter = require('./expense/expenseRouter');
const incomeRouter = require('./income/incomeRouter');

// התחבר למסד הנתונים
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Middleware לקריאת JSON
app.use(cors());

// Routes
app.use('/', expenseRouter);
app.use('/', incomeRouter);


// הרם את השרת
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
