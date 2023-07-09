import BudgetService from "../service/BudgetService"


export const budgetModule = {
    namespaced: true,

    state: () => ({
        budgets: []
    }),

    getters: {

    },

    mutations: {
        setBudgets(state, budgets) {
            state.budgets = budgets
        },
        addBudget(state, budget) {
            state.budgets.push(budget)
        },
        filterBudgets(state, id) {
            state.budgets = state.budgets.filter((bud) => bud._id !== id)
        }
    },

    actions: {
        async createBudget({commit}, params) {
            try {
                const response = await BudgetService.createBudget(params)

                commit('addBudget', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getBudgets({commit}) {
            try {
                const response = await BudgetService.getBudgets()

                commit('setBudgets', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteBudget({commit}, id) {
            try {
                await BudgetService.deleteBudget(id)
                commit('filterBudgets', id)
            } catch (error) {
                console.log(error)
            }
        },
        async updateBudget({dispatch}, params) {
            try {
                const p = params[0]
                const id = params[1]

                await TransferService.updateTransfer(id, p)

                dispatch('getBudgets')
            } catch (error) {
                console.log(error)
            }
        }
    }

}