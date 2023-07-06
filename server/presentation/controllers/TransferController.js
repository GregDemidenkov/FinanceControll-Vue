const TransferDao = require("../../infrastructure/db/dao/TransferDao")


class TransferController {


    async createTransfer(req, res) {
        try {
            const result = await TransferDao.createTransfer(req.body)

            return res.json(result)
        } catch (e) {
            console.log(e)
            res.status(500).send({message: "Server error"})
        }
    }

    async getTransfers(req, res) {
        try {
            const result = await TransferDao.getTransfers()

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Transfers not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async getTransfersByAccountId(req, res) {
        try {
            const { account_id, type_id } = req.query
            const result = await TransferDao.getTransfersByAccountId(account_id, type_id)

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Transfers not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async deleteTransfer(req, res) {
        try {
            const { id } = req.query
            const result = await TransferDao.deleteTransfer(id)

            return res.json(result)
        } catch (e) {
            console.log(e)
            
            if(e.message == "Transfer not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async updateTransfer(req, res) {
        try {
            const { id, money } = req.body
            const result = await TransferDao.updateTransfer(id, money)

            return res.json(result)
        } catch (e) {
            console.log(e)
            
            if(e.message == "Transfer not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }
}


module.exports = new TransferController()