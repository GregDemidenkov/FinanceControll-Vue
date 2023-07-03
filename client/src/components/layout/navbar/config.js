import routes from '@/app/router/routes.js'


export default [
    {img: 'src/assets/img/accounts.svg', label: 'Accounts', to: routes.accounts},
    {img: 'src/assets/img/budgets.svg', label: 'Budgets', to: routes.budgets},
    {img: 'src/assets/img/transfers.svg', label: 'Transfers', to: routes.transfers},
]