const Income = require('./incomeModel');


//add new income
async function addIncome(newIncome) {
    if (!newIncome.amount || !newIncome.date || !newIncome.customer) {
        throw new Error("שדות חובה חסרים: amount, date, customer");
    }
    return await Income.create(newIncome);
}

//get all incomes between start date and end date
const getIncomes = async function (startDate, endDate) {
    const start = new Date(startDate);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setUTCHours(23, 59, 59, 999);

    const incomes = await Income.find({ 
        date: {
            $gte: start,
            $lte: end
        },
        isDeleted: false
    });
    return incomes;
}
//delete income
const deleteInc = async (incomeID) => {
    const income = await Income.findById(incomeID);
    if (!income) {
        return null;
    }
    income.isDeleted = true;
    await income.save();
    return income;
};

module.exports = {addIncome, getIncomes, deleteInc};
