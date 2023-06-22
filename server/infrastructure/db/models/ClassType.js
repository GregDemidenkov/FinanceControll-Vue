const { Schema, model } = require("mongoose")


const ClassType = new Schema({
    type: {type: String, required: true},
})


module.exports = model("ClassType", ClassType)