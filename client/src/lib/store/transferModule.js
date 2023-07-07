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
        async createTransfer({dispatch}, params) {
            try {
                await TransferService.createTransfer(params)
                dispatch('getTransfers')
            } catch (error) {
                console.log(error)
            }
        },
        async getTransfers({commit}) {
            try {
                const response = await TransferService.getTransfers()
                
                commit('setTransfers', response.data)
            } catch (error) {
                console.log(error)
            }
        },

        async getTransfersByAccountId({commit}, account_id, type_id) {
            try {
                const response = await TransferService.getTransfersByAccountId(account_id, type_id)
                
                commit('setTransfers', response.data)
            } catch (error) {
                console.log(error)
            }
        },

        async deleteTransfer({commit}, id) {
            try {
                await TransferService.deleteTransfer(id)
                commit('filterTransfers', id)
            } catch (error) {
                console.log(error)
            }
        },
        async updateTransfer({dispatch}, params) {
            try {
                await TransferService.updateTransfer(params)
                dispatch('getTransfers')
            } catch (error) {
                console.log(error)
            }
        }
    }

}