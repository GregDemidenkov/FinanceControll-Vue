const TransferTypeDao = require("../../infrastructure/db/dao/TransferTypeDao")


class TransferTypeController {


    async getTransferTypes(req, res) {
        try {
            const result = await TransferTypeDao.getTransferTypes()

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "TransferTypes not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async getTransferTypeById(req, res) {
        try {
            const { id } = req.query
            const result = await TransferTypeDao.getTransferTypeById(id)

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "TransferType not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

}


module.exports = new TransferTypeController()