const { Schema, model, ObjectId } = require("mongoose")


const Transfer = new Schema({
    account_id: {type: ObjectId, required: true},
    type_id: {type: ObjectId, required: true},
    class_id: {type: ObjectId, required: true},
    money: {type: Number, required: true}
})


module.exports = model("Transfer", Transfer)