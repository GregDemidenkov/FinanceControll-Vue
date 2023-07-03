import { createRouter, createWebHistory } from 'vue-router'

import config from '@/app/router/routes.js'

import HomePage from '@/pages/HomePage.vue'
import AccountsPage from '@/pages/AccountsPage.vue'


const routes = [
    {
        path: config.main,
        component: HomePage
    },
    {
        path: config.accounts,
        component: AccountsPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router