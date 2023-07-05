import TransferTypeService from "../service/TransferTypeService"


export const transferTypeModule = {
    namespaced: true,

    state: () => ({
        transferTypes: []
    }),

    getters: {

    },

    mutations: {
        setTransferTypes(state, transferTypes) {
            state.transferTypes = transferTypes
        }
    },

    actions: {
        async getTransferTypes({state, commit}) {
            try {
                const response = await TransferTypeService.getTransferTypes()
                commit('setTransferTypes', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

}