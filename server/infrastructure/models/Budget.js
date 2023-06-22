const { Schema, model, ObjectId } = require("mongoose")


const Budget = new Schema({
    from_date: {type: Date, required: true},
    to_date: {type: Date, default: null},
    status: {type: String, default: "active"},
    budget_money: {type: Number, required: true},
    curr_money: {type: Number, required: true},
    account_id: {type: ObjectId, required: true}
})


module.exports = model("Budget", Budget)