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
        },
        isDeleted: false
    });
    return expenses;
}

const getOne = async function (expenseID) {
    const expense = await Expense.findById(expenseID);
    return expense;
}

const deleteEx = async (expenseID) => {
    const expense = await Expense.findById(expenseID);
    const isDeleted = expense.isDeleted;
    
    if (!expense || isDeleted) {
        return null;
    }
    expense.isDeleted = true;
    await expense.save();
    return expense;
};


module.exports = {
    addExpense,getEx,getOne,deleteEx
};
