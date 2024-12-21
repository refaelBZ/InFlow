const Expense = require('./expenseModel');

async function addExpense(newExpense) {
    if (!newExpense.amount || !newExpense.date || !newExpense.customer) {
        throw new Error("שדות חובה חסרים: amount, date, customer");
    }
    return await Expense.create(newExpense);
}

const getEx = async function (startDate, endDate) {
    const start = new Date(startDate);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setUTCHours(23, 59, 59, 999);

    const expenses = await Expense.find({ 
        date: {
            $gte: start,
            $lte: end
        }
    });
    return expenses;
}

module.exports = {
    addExpense,getEx
};
