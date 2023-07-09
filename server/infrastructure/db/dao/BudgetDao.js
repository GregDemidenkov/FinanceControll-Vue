const Account = require("../models/Account")
const Budget = require("../models/Budget")


class BudgetDao {


    async createBudget(budgetInfo) {
        const budget = new Budget(budgetInfo)

        await budget.save()

        return budget
    }

    async getBudgets() {
        const budgets = await Budget.aggregate([{'$lookup': {
            'from': 'accounts',
            'localField': 'account_id',
            'foreignField': '_id',
            'as': 'account'
        }}])

        if(!budgets) {
            throw new Error("Budgets not found")
        }

        return budgets
    }

    async getMoneyFromAllAccounts(account_id) {
        let money = 0
        const budgets = await Budget.find({account_id: account_id})

        if(!budgets) {
            throw new Error("Budgets not found")
        }

        budgets.forEach(bud => {
            money += bud.curr_money
        })

        return money
    }

    async deleteBudget(id) {
        const budget = await Budget.findOneAndDelete({_id: id})

        if(!budget) {
            throw new Error("Budget not found")
        }

        const account = await Account.findOne({_id: budget.account_id})

        if(!account) {
            throw new Error("Account not found")
        }

        account.money += budget.curr_money

        await account.save()

        return "Budget was deleted"
    }

    async updateBudget(id, account_id, money) {
        const budget = await Budget.findOne({_id: id})

        if(!budget) {
            throw new Error("Budget not found")
        }

        const account = await Account.findOne({_id: account_id})

        if(!account) {
            throw new Error("Account not found")
        }

        account.money -= money
        budget.curr_money += money

        if(budget.curr_money >= budget.budget_money) {
            budget.status = "end"
        }

        await account.save()
        await budget.save()

        return budget
    }

}


module.exports = new BudgetDao()