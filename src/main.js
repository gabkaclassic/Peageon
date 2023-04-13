import { createApp } from 'vue'
import App from './App.vue'
import router from '@/js_part/routing/router'
import Api from '@/js_part/plugins/apis/api'
import store from '@/js_part/storage/storages'
import mutations from "@/js_part/plugins/mutations/mutations";

const app = createApp(App)
app.use(router)
app.use(Api)
app.use(store)
app.use(mutations)
app.mount('#app')
