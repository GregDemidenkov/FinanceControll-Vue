import axios from 'axios'


class TransferService {

    path = "/api/transfer"


    async createTransfer(params) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/create`, params)
    }

    async getTransfers() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }

    async getTransfersByAccountId(account_id, type_id) {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}`, {
            params: {
                account_id: account_id,
                type_id: type_id
            }
        })
    }

    async deleteTransfer(id) {
        return await axios.delete(`${import.meta.env.VITE_PORT}${this.path}/delete`, {
            params: {
                id: id
            }
        })
    }

    async updateTransfer(params) {
        return await axios.patch(`${import.meta.env.VITE_PORT}${this.path}/update`, params)
    }
}


export default new TransferService()