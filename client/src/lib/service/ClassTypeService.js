import axios from 'axios'


class ClassTypeService {

    path = "/api/classType"


    async getClassTypes() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }
}


export default new ClassTypeService()