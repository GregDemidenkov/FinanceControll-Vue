import { createRouter, createWebHistory } from 'vue-router'

import config from '@/app/router/routes.js'

import MainPage from '@/pages/MainPage.vue'
import AccountsPage from '@/pages/AccountsPage.vue'
import AccountIdPage from '@/pages/AccountIdPage.vue'
import BudgetsPage from '@/pages/BudgetsPage.vue'
import TransfersPage from '@/pages/TransfersPage.vue'



const routes = [
    {
        path: config.main,
        component: MainPage
    },
    {
        path: config.accounts,
        component: AccountsPage
    },
    {
        path: config.AccountIdPage,
        component: AccountIdPage
    },
    {
        path: config.budgets,
        component: BudgetsPage
    },
    {
        path: config.transfers,
        component: TransfersPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router