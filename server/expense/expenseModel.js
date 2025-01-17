const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    customer: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
});


const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;