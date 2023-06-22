const Router = require("express")

const ClassTypeController = require("../controllers/ClassTypeController")


const router = new Router()

router.get('/all', ClassTypeController.getClassTypes)
router.get('', ClassTypeController.getClassTypeById)


module.exports = router