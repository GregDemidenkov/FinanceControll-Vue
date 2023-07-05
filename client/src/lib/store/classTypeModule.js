import ClassTypeService from "../service/ClassTypeService"


export const classTypeModule = {
    namespaced: true,

    state: () => ({
        classTypes: []
    }),

    getters: {

    },

    mutations: {
        setClassTypes(state, classTypes) {
            state.classTypes = classTypes
        }
    },

    actions: {
        async getClassTypes({state, commit}) {
            try {
                const response = await ClassTypeService.getClassTypes()
                commit('setClassTypes', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

}