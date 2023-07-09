import AccountService from "../service/AccountService"


export const accountModule = {
    namespaced: true,

    state: () => ({
        accounts: [],
        accountPageInfo: {}
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
        },
        async getAccountById({state, commit}, id) {
            try {
                const response = await AccountService.getAccountById(id)

                commit('setAccount', response.data)
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