import AccountService from "../service/AccountService"
import dinamicAddRoutes from "@/app/router/dinamicAddRoutes"


export const accountModule = {
    namespaced: true,

    state: () => ({
        accounts: []
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
        }
    },

    actions: {
        async createAccount({state, commit}, params) {
            try {
                const response = await AccountService.createAccount(params)

                commit('addAccount', response.data)
                dinamicAddRoutes(state.accounts)
            } catch (error) {
                console.log(error)
            }
        },
        async getAccounts({state, commit}) {
            try {
                const response = await AccountService.getAccounts()

                commit('setAccounts', response.data)
                dinamicAddRoutes(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteAccount({state, commit}, id) {
            try {
                await AccountService.deleteAccount(id)
                commit('filterAccounts', id)
            } catch (error) {
                console.log(error)
            }
        }

    }

}