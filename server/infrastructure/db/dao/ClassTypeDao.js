const ClassType = require("../models/ClassType")


class ClassTypeDao {


    async getClassTypes() {
        const classTypes = await ClassType.aggregate([{'$lookup': {
            'from': 'transfertypes',
            'localField': 'transfer_type',
            'foreignField': '_id',
            'as': 'transfer_type'
        }}])

        if(!classTypes) {
            throw new Error("ClassTypes not found")
        }

        return classTypes
    }

    async getClassTypeById(id) {
        const classType = await ClassType.findOne({_id: id})

        if(!classType) {
            throw new Error("ClassType not found")
        }

        return classType
    }

}


module.exports = new ClassTypeDao()