import { createStore } from 'vuex'

import { accountModule } from './accountModule'
import { transferModule } from './transferModule'
import { transferTypeModule } from './transferTypeModule'
import { classTypeModule } from './classTypeModule'


export default createStore({
    modules: {
        accounts: accountModule,
        transfers: transferModule,
        transferTypes: transferTypeModule,
        classTypes: classTypeModule,
    }
})