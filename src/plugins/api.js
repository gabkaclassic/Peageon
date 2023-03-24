import AuthoadizationApi from "@/api/authoadization_api";
import Gitoad_api from "@/api/gitoad_api";

export default {
    install(Vue) {
        Vue.config.globalProperties.$authoadization = AuthoadizationApi
        Vue.config.globalProperties.$gitoad = Gitoad_api
    }
}

