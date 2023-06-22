const { Schema, model } = require("mongoose")


const TransferType = new Schema({
    type: {type: String, required: true},
})


module.exports = model("TransferType", TransferType)