const { Schema, model, ObjectId } = require("mongoose")


const Budget = new Schema({
    from_date: {type: Date, default: Date.now()},
    to_date: {type: Date, default: null},
    status: {type: String, default: "active"},
    budget_money: {type: Number, required: true},
    curr_money: {type: Number, default: 0},
    account_id: {type: ObjectId, required: true}
})


module.exports = model("Budget", Budget)