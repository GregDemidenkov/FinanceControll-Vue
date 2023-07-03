import AccountService from "../service/AccountService"


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
        }
    },

    actions: {
        async createAccount({state, commit}, params) {
            try {
                const response = await AccountService.createAccount(params)
                commit('addAccount', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getAccounts({state, commit}) {
            try {
                const response = await AccountService.getAccounts()
                commit('setAccounts', response.data)
            } catch (error) {
                console.log(error)
            }
        }

    }

}