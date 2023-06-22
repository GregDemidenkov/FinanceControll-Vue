const Router = require("express")

const AccountController = require("../controllers/AccountController")


const router = new Router()

router.get('', AccountController.getAccountById)
router.get('/all', AccountController.getAccounts)

router.post('/create', AccountController.createAccount)

router.delete('/delete', AccountController.deleteAccount)


module.exports = router