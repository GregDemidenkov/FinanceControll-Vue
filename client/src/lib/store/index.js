import { createStore } from 'vuex'

import { accountModule } from './accountModule'


export default createStore({
    modules: {
        accounts: accountModule
    }
})