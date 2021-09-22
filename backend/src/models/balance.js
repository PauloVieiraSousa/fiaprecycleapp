const mongoose = require('../database');

const balanceSchema = new mongoose.Schema({
    userId:{type:String},
    value:{type:Number},
    operationType: {type:String},
    createAt:{type:Date,default:Date.now},
});

const balance = mongoose.model('Balance', balanceSchema);

module.exports = balance;