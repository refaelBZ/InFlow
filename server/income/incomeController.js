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
        },
        isDeleted: false
    });
    return incomes;
}

const deleteInc = async (incomeID) => {
    const income = await Income.findById(incomeID);
    if (!income) {
        return null;
    }
    income.isDeleted = true;
    await income.save();
    return income;
};




async function updateIncomeDocuments() {
    try {
       


        // עדכון כל ההכנסות
        const incomeResult = await Income.updateMany(
            { isDeleted: { $exists: false } },
            { $set: { isDeleted: false } }
        );

        console.log(`Updated ${incomeResult.modifiedCount} income documents`);
        console.log('Update completed successfully');

    } catch (error) {
        console.error('Error updating income documents:', error);

}
}

updateIncomeDocuments();


module.exports = {
    addIncome,
    getIncomes,
    deleteInc
};
