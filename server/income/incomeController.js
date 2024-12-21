const Income = require('./incomeModel');

async function addIncome(newIncome) {
    if (!newIncome.amount || !newIncome.date || !newIncome.customer) {
        throw new Error("שדות חובה חסרים: amount, date, customer");
    }
    return await Income.create(newIncome);
}

const getIncomes = async function (startDate, endDate) {
    const start = new Date(startDate);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setUTCHours(23, 59, 59, 999);

    const incomes = await Income.find({ 
        date: {
            $gte: start,
            $lte: end
        }
    });
    return incomes;
}


module.exports = {
    addIncome,
    getIncomes
};
