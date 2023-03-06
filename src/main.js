import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Api from '@/plugins/api'

const app = createApp(App)
app.use(router)
app.use(Api)

app.mount('#app')
