
const expenseController = require('./expenseController');

//add a new expense
async function createExpense(expense) {
    const newExpense = await expenseController.addExpense(expense);
    return newExpense;
}

//get the total expenses for specific period
const getExpenses = async (startDate, endDate) => {
    const expenses = await expenseController.getEx(startDate, endDate);
    const totalExpenses = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    return totalExpenses;
}

//get all expenses between start date and end date
const getAllExpenses = async (startDate, endDate) => {
    const expenses = await expenseController.getEx(startDate, endDate);
    return expenses;
}
module.exports = {
    createExpense,getExpenses,getAllExpenses
};
