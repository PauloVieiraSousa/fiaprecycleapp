const mongoose = require('../database');

const storeSchema = new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    address:{type:String},
    createAt:{type:Date,default:Date.now},
});

const store = mongoose.model('Store', storeSchema);

module.exports = store;