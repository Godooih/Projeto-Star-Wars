import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/_variables.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

app.mount('#app')
