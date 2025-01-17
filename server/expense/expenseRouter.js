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


router.get('/totalexpense', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const expenses = await expenseService.getExpenses(startDate, endDate);
        res.status(200).json(expenses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/expenses', async (req, res) => {

    try {
        const { startDate, endDate } = req.query;
        const expenses = await expenseService.getAllExpenses(startDate, endDate);
        res.status(200).json(expenses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/expenses/:id', async (req, res) => {
    try {
        const deletedExpense = await expenseService.deleteExpense(req.params.id);
        if (!deletedExpense) {
            return res.status(404).json({ error: "Expense not found" });
        }

        res.status(200).json({ message: "Expense deleted successfully", expense: deletedExpense });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



module.exports = router;
