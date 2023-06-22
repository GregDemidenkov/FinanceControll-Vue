const TransferType = require("../models/TransferType")


class TransferTypeDao {


    async getTransferTypes() {
        const transferTypes = await TransferType.find()

        if(!transferTypes) {
            throw new Error("TransferTypes not found")
        }

        return transferTypes
    }

    async getTransferTypeById(id) {
        const transferType = await TransferType.findOne({_id: id})

        if(!transferType) {
            throw new Error("TransferType not found")
        }

        return transferType
    }

}


module.exports = new TransferTypeDao()