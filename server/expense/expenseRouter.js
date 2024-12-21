const express = require("express");
const router = express.Router();
const expenseService = require("./expenseService");

router.post('/expense', async (req, res) => {
    try {
        const expense = await expenseService.createExpense(req.body);
console.log("router", expense);

        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/expense', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const expenses = await expenseService.getExpenses(startDate, endDate);
        res.status(200).json(expenses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
