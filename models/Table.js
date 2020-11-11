const mongoose = require('mongoose');
const TableSchema = mongoose.Schema({
    nameTable: {type: String},
    amount: {type:Number},
    information:{type: String},
    status: {type: Number}
});
const Table = mongoose.model('table', TableSchema);
module.exports = Table;