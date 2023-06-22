const Router = require("express")

const TransferController = require("../controllers/TransferController")


const router = new Router()

router.get('', TransferController.getTransfersByAccountId)

router.post('/create', TransferController.createTransfer)

router.delete('/delete', TransferController.deleteTransfer)

router.patch('/update', TransferController.updateTransfer)


module.exports = router