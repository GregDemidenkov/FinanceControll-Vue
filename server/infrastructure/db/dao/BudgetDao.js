const Account = require("../models/Account")
const Transfer = require("../models/Transfer")
const Budget = require("../models/Budget")
const AccountDao = require("./AccountDao")


class BudgetDao {


    async createBudget(budgetInfo) {
        const budget = new Budget(budgetInfo)

        await budget.save()

        return budget
    }

    async getBudgets() {
        const budgets = await Budget.find()

        if(!budgets) {
            throw new Error("Budgets not found")
        }

        return budgets
    }

    async deleteBudget(id) {
        const budget = await Budget.find({_id: id})

        if(!budget) {
            throw new Error("Budget not found")
        }

        await budget.deleteOne()
        await AccountDao.deleteAccount(budget.account_id)

        return "Budget was deleted"
    }

    async updateBudget(id, newInfo) {
        const budget = await Transfer.findByIdAndUpdate(id, newInfo, {new: true})

        if(!budget) {
            throw new Error("Budget not found")
        }

        return budget
    }

}


module.exports = new BudgetDao()