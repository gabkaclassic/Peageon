import AuthoadizationApi from "@/plugins/apis/authoadization_api";
import Gitoad_api from "@/plugins/apis/gitoad_api";

export default {
    install(Vue) {
        Vue.config.globalProperties.$authoadization = AuthoadizationApi
        Vue.config.globalProperties.$gitoad = Gitoad_api
    }
}

