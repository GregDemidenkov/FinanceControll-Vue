const Account = require("../models/Account")
const Transfer = require("../models/Transfer")


class AccountDao {


    async createAccount(AccountInfo) {
        const account = new Account({
            number: AccountInfo.number
        })

        await account.save()

        return account
    }

    async getAccountById(id) {
        const account = await Account.findOne({_id: id})

        if(!account) {
            throw new Error("Account not found")
        }

        return account
    }

    async getAccounts() {
        const accounts = await Account.find()

        if(!accounts) {
            throw new Error("Accounts not found")
        }

        return accounts
    }

    async deleteAccount(id) {
        const account = await Account.findOne({_id: id})

        if(!account) {
            throw new Error("Account not found")
        }

        await Account.deleteOne({_id: id})
        await Transfer.deleteMany({account_id: id})

        return "Account was deleted"
    }

}


module.exports = new AccountDao()