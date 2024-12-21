
const expenseController = require('./expenseController');

async function createExpense(expense) {
    const newExpense = await expenseController.addExpense(expense);
    return newExpense;
}

const getExpenses = async (startDate, endDate) => {
    const expenses = await expenseController.getEx(startDate, endDate);
    const totalExpenses = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    return totalExpenses;
}
module.exports = {
    createExpense,getExpenses
};
