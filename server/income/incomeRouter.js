const express = require("express");
const router = express.Router();
const incomeService = require("./incomeService");

router.post('/income', async (req, res) => {
    try {
        const income = await incomeService.createIncome(req.body);
        res.status(201).json(income);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/income', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const incomes = await incomeService.getIncomes(startDate, endDate);
        res.status(200).json(incomes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
