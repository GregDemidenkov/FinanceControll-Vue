const BudgetDao = require("../../infrastructure/db/dao/BudgetDao")


class BudgetController {


    async createBudget(req, res) {
        try {
            const result = await BudgetDao.createBudget(req.body)

            return res.json(result)
        } catch (e) {
            console.log(e)
            res.status(500).send({message: "Server error"})
        }
    }

    async getBudgets(req, res) {
        try {
            const result = await BudgetDao.getBudgets()

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Budgets not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async getMoneyFromAllAccounts(req, res) {
        try {
            const { account_id } = req.query
            const result = await BudgetDao.getMoneyFromAllAccounts(account_id)

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "Budgets not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async deleteBudget(req, res) {
        try {
            const { id } = req.query
            const result = await BudgetDao.deleteBudget(id)

            return res.json(result)
        } catch (e) {
            console.log(e)
            
            if(e.message == "Budget not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async updateBudget(req, res) {
        try {
            const { id, account_id, money } = req.body
            const result = await BudgetDao.updateBudget(id, account_id, money)

            return res.json(result)
        } catch (e) {
            console.log(e)
            
            if(e.message == "Budget not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

}


module.exports = new BudgetController()