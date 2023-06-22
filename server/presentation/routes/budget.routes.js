const Router = require("express")

const BudgetController = require("../controllers/BudgetController")


const router = new Router()


router.get('/all', BudgetController.getBudgets)

router.post('/create', BudgetController.createBudget)

router.delete('/delete', BudgetController.deleteBudget)

router.patch('/update', BudgetController.updateBudget)


module.exports = router