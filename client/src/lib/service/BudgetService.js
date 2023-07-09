import axios from 'axios'


class BudgetService {

    path = "/api/budget"


    async createBudget(params) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/create`, params)
    }

    async getBudgets() {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}/all`)
    }

    async getMoneyFromAllAccounts(account_id) {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}`, {
            params: {
                account_id: account_id
            }
        })
    }

    async deleteBudget(id) {
        return await axios.delete(`${import.meta.env.VITE_PORT}${this.path}/delete`, {
            params: {
                id: id
            }
        })
    }

    async updateBudget(params) {
        return await axios.patch(`${import.meta.env.VITE_PORT}${this.path}/update`, params)
    }
}


export default new BudgetService()