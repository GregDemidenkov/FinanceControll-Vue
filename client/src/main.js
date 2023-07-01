import { createApp } from 'vue'

import App from '@/app/App.vue'
import router from '@/lib/router'
import components from '@/components/shared/ui'

import '@/assets/styles/reseter.scss'
import '@/assets/styles/scroll.scss'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
