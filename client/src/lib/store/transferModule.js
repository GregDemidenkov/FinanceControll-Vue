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
        filterTransfers(state, id) {
            state.transfers = state.transfers.filter((acc) => acc._id !== id)
        }
    },

    actions: {
        async createTransfer({dispatch}, params) {
            try {
                const type = params[1]
                const p = params[0]

                await TransferService.createTransfer(p)
                if (type == "all") {
                    dispatch('getTransfers')
                } else {
                    dispatch('getTransfersByAccountId', {
                        account_id: p.account_id,
                    })
                }
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

        async getTransfersByAccountId({commit}, params) {
            try {
                const response = await TransferService.getTransfersByAccountId(params.account_id, params.type_id)
                
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
                const p = params[0]
                const type = params[1]
                const account_id = params[2]

                await TransferService.updateTransfer(p)

                if (type == "all") {
                    dispatch('getTransfers')
                } else {
                    dispatch('getTransfersByAccountId', {
                        account_id: account_id,
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

}