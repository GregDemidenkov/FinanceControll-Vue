const AccountDao = require("../../infrastructure/db/dao/AccountDao")


class AccountrController {


    async createAccount(req, res) {
        try {
            const result = await AccountDao.createAccount(req.body)

            return res.json(result)
        } catch (e) {
            console.log(e)
            res.status(500).send({message: "Server error"})
        }
    }

    async getAccountById(req, res) {
        try {
            const { id } = req.query
            const result = await AccountDao.getAccountById(id)

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Account not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async getAccounts(req, res) {
        try {
            const result = await AccountDao.getAccounts()

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Accounts not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async deleteAccount(req, res) {
        try {
            const { id } = req.query
            const result = await TransferDao.deleteAccount(id)

            return res.json(result)
        } catch (e) {
            console.log(e)
            
            if(e.message == "Account not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

}


module.exports = new AccountrController()