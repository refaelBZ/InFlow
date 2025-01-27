const express = require("express");
const router = express.Router();
const incomeService = require("./incomeService");


//add a new income
router.post('/income', async (req, res) => {
    try {
        const income = await incomeService.createIncome(req.body);
        res.status(201).json(income);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//get total incomes
router.get('/income', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const incomes = await incomeService.getIncomes(startDate, endDate);
        res.status(200).json(incomes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//get list of the incomes
router.get('/incomes', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const incomes = await incomeService.getAllIncomes(startDate, endDate);
        res.status(200).json(incomes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//update the income as deleted from the incomes
router.put('/incomes/:id', async (req, res) => {
    try {
        const deletedIncome = await incomeService.deleteIncome(req.params.id);
        if (!deletedIncome) {
            return res.status(404).json({ error: "Income not found" });
        }

        res.status(200).json({ message: "Income deleted successfully", income: deletedIncome });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
