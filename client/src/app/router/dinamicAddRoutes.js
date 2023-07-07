import AccountIdPage from "@/pages/AccountIdPage.vue"
import router from "@/app/router"


export default (accounts) => {
    accounts.forEach(acc => {
        router.addRoute({ path: `/accounts/${acc._id}`, component: AccountIdPage })
    })
}