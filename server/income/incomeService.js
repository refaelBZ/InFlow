const incomeController = require('./incomeController');

async function createIncome(income) {
    return await incomeController.addIncome(income);
}

const getIncomes = async (startDate, endDate) => {
    const incomes = await incomeController.getIncomes(startDate, endDate);
    const totalIncomes = incomes.reduce((sum, income) => {
        return sum + income.amount;
    }, 0);
    return totalIncomes;
}

const getAllIncomes= async (startDate, endDate) => {
    
    const incomes = await incomeController.getIncomes(startDate, endDate);
    return incomes;
}

const deleteIncome = async (incomeID) => {
    const income = await incomeController.deleteInc(incomeID);
    return income;
}

module.exports = {
    createIncome,
    getIncomes,
    getAllIncomes,
    deleteIncome
};
