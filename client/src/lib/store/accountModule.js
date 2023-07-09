import AccountService from "../service/AccountService"
import BudgetService from "../service/BudgetService"


export const accountModule = {
    namespaced: true,

    state: () => ({
        accounts: [],
        accountPageInfo: {},
        budgetMoney: 0
    }),

    getters: {

    },

    mutations: {
        setAccounts(state, accounts) {
            state.accounts = accounts
        },
        addAccount(state, account) {
            state.accounts.push(account)
        },
        filterAccounts(state, id) {
            state.accounts = state.accounts.filter((acc) => acc._id !== id)
        },
        setAccount(state, account) {
            state.accountPageInfo = account
        },
        addBudgetMoney(state, money) {
            state.budgetMoney = money
        }
    },

    actions: {
        async createAccount({dispatch}, params) {
            try {
                await AccountService.createAccount(params)

                dispatch('getAccounts')
            } catch (error) {
                console.log(error)
            }
        },
        async getAccounts({commit}) {
            try {
                const response = await AccountService.getAccounts()

                commit('setAccounts', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getMoneyFromAllAccounts({commit}, account_id) {
            try {
                const response = await BudgetService.getMoneyFromAllAccounts(account_id)

                commit('addBudgetMoney', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getAccountById({commit}, id) {
            try {
                const response = await AccountService.getAccountById(id)

                commit('setAccount', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteAccount({commit}, id) {
            try {
                await AccountService.deleteAccount(id)
                commit('filterAccounts', id)
            } catch (error) {
                console.log(error)
            }
        }

    }

}