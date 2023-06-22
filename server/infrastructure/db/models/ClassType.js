const { Schema, model, ObjectId } = require("mongoose")


const ClassType = new Schema({
    class_type: {type: String, required: true},
    transfer_type: {type: ObjectId, required: true},
})


module.exports = model("ClassType", ClassType)