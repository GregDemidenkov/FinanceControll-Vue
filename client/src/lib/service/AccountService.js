import axios from 'axios'


class AccountService {

    path = "/api/account"


    async createAccount(params) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/create`, params)
    }

    async getAccounts() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }

    async deleteAccount(id) {
        return await axios.delete(`${import.meta.env.VITE_PORT}${this.path}/delete`, {
            params: {
                id: id
            }
        })
    }
}


export default new AccountService()