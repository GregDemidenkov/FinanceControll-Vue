const ClassTypeDao = require("../../infrastructure/db/dao/ClassTypeDao")


class ClassTypeController {


    async getClassTypes(req, res) {
        try {
            const result = await ClassTypeDao.getClassTypes()

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "ClassTypes not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

    async getClassTypeById(req, res) {
        try {
            const { id } = req.query
            const result = await ClassTypeDao.getClassTypeById(id)

            return res.json(result)
        } catch (e) {
            console.log(e)

            if(e.message == "ClassType not found") {
                res.status(404).send({message: e.message})
            }
            res.status(500).send({message: "Server error"})
        }
    }

}


module.exports = new ClassTypeController()