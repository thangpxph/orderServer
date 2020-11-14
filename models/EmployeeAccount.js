const mongoose = require('mongoose');

const EmployeeAccountSchema = mongoose.Schema({
    staffsname:{type: String},
    age: {type: String},
    address: {type: String},
    username: {type: String},
    password: {type: String},
});

const EmployeeAccount = mongoose.model('employeeAccount', EmployeeAccountSchema);
module.exports = EmployeeAccount;