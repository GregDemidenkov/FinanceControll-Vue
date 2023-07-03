import axios from 'axios'


class AccountService {

    path = "/api/account"


    async createAccount(params) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/create`, params)
    }

    async getAccounts() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }
}


export default new AccountService()