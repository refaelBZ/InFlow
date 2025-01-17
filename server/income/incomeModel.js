const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    customer: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    productType: { 
        type: String, 
        required: true,
        enum: ['general', 'custom_cake', 'bento_cake_12', 'bento_cake', 'package', 'workshop', "box_cake"],
        default: 'general'
    }
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
