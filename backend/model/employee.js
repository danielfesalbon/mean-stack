const mongoose = require('mongoose');


var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String }
}, 'employee');

module.exports = Employee;