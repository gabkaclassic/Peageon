import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Api from '@/plugins/apis/api'
import store from '@/storages/storages'
import mutations from "@/plugins/mutations/mutations";

const app = createApp(App)
app.use(router)
app.use(Api)
app.use(store)
app.use(mutations)
app.mount('#app')
