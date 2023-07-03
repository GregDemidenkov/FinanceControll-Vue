import { createApp } from 'vue'

import App from '@/app/App.vue'
import router from '@/app/router'
import components from '@/components/shared/ui'
import directives from '@/lib/directives'
import store from '@/lib/store'

import '@/assets/styles/reseter.scss'
import '@/assets/styles/scroll.scss'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app')
