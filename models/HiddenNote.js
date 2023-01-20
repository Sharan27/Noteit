const mongoose = require('mongoose')
const hiddennoteSchema = new mongoose.Schema({
    email: {type: String, required: true},
    title: {type: String, required: true},
    note: {type: String, required: true},
    dateinfo: {type:String, required: true}
}, {timestamps: true});

module.exports = mongoose.model(('HiddenNote'), hiddennoteSchema);
