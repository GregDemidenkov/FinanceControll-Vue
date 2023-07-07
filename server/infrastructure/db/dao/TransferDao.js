const { mongoose } = require("mongoose")

const Transfer = require("../models/Transfer")
const Account = require("../models/Account")


class TransferDao {


    async createTransfer(transferInfo) {
        const transfer = new Transfer({
            account_id: transferInfo.account_id,
            type_id: transferInfo.type_id,
            class_id: transferInfo.class_id,
            money: transferInfo.money,
        })

        await transfer.save()

        const account = await Account.findOne({_id: transfer.account_id})
        account.money += transfer.money

        await account.save()

        return transfer
    }

    async getTransfers() {
        const transfers = await Transfer.aggregate([
            {
                '$lookup': {
                    'from': 'accounts',
                    'localField': 'account_id',
                    'foreignField': '_id',
                    'as': 'account'
                }
            },
            {
                '$lookup': {
                    'from': 'transfertypes',
                    'localField': 'type_id',
                    'foreignField': '_id',
                    'as': 'transfer_type'
                }
            },
            {
                '$lookup': {
                    'from': 'classtypes',
                    'localField': 'class_id',
                    'foreignField': '_id',
                    'as': 'class_type'
                }
            }
        ])

        if(!transfers) {
            throw new Error("Transfers not found")
        }

        return transfers
    }

    async getTransfersByAccountId(account_id, type_id) {
        let transfers
        let acc_id = new mongoose.Types.ObjectId(account_id);

        if (!type_id) {
            transfers = await Transfer.aggregate([
                { $match: { account_id: acc_id } },
                {
                    '$lookup': {
                        'from': 'accounts',
                        'localField': 'account_id',
                        'foreignField': '_id',
                        'as': 'account'
                    }
                },
                {
                    '$lookup': {
                        'from': 'transfertypes',
                        'localField': 'type_id',
                        'foreignField': '_id',
                        'as': 'transfer_type'
                    }
                },
                {
                    '$lookup': {
                        'from': 'classtypes',
                        'localField': 'class_id',
                        'foreignField': '_id',
                        'as': 'class_type'
                    }
                }
            ])
        } else {
            transfers = await Transfer.find({account_id: account_id, type_id: type_id})
        }

        if(!transfers) {
            throw new Error("Transfers not found")
        }

        return transfers
    }

    async deleteTransfer(id) {
        console.log(id)
        const transfer = await Transfer.findOne({_id: id})

        if(!transfer) {
            throw new Error("Transfer not found")
        }

        const account = await Account.findOne({_id: transfer.account_id})
        account.money -= transfer.money

        await account.save()
        await transfer.deleteOne()

        return "Transfer was deleted"
    }

    async updateTransfer(id, money) {
        const transfer = await Transfer.findOne({_id: id})

        if(!transfer) {
            throw new Error("Transfer not found")
        }

        const tMoney = transfer.money

        transfer.money = money
        await transfer.save()

        const account = await Account.findOne({_id: transfer.account_id})

        if(tMoney > money) {
            account.money += money - tMoney
        } else if(tMoney < money) {
            account.money += money - tMoney
        }

        await account.save()

        return transfer
    }
}


module.exports = new TransferDao()