import axios from 'axios'


class TransferTypeService {

    path = "/api/transferType"


    async getTransferTypes() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }
}


export default new TransferTypeService()