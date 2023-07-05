import TransferService from "../service/TransferService"


export const transferModule = {
    namespaced: true,

    state: () => ({
        transfers: []
    }),

    getters: {

    },

    mutations: {
        setTransfers(state, transfers) {
            state.transfers = transfers
        },
        addTransfer(state, transfer) {
            state.transfers.push(transfer)
        },
        filterTransfers(state, id) {
            state.transfers = state.transfers.filter((acc) => acc._id !== id)
        }
    },

    actions: {
        async createTransfer({state, commit}, params) {
            try {
                const response = await TransferService.createTransfer(params)
                commit('addTransfer', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getTransfers({state, commit}) {
            try {
                const response = await TransferService.getTransfers()
                commit('setTransfers', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        // async deleteAccount({state, commit}, id) {
        //     try {
        //         await AccountService.deleteAccount(id)
        //         commit('filterAccounts', id)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

    }

}