const Router = require("express")

const TransferTypeController = require("../controllers/TransferTypeController")


const router = new Router()

router.get('/all', TransferTypeController.getTransferTypes)
router.get('', TransferTypeController.getTransferTypeById)


module.exports = router