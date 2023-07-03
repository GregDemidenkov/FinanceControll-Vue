const { Schema, model } = require("mongoose")


const Account = new Schema({
    number: {type: String, required: true, unique: true},
    money: {type: Number, default: 0},
    created_at: {type: Date, default: Date.now()}
})


module.exports = model("Account", Account)