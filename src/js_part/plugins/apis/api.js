import AuthoadizationApi from "@/js_part/plugins/apis/authoadization_api";
import Gitoad_api from "@/js_part/plugins/apis/gitoad_api";

export default {
    install(Vue) {
        Vue.config.globalProperties.$authoadization = AuthoadizationApi
        Vue.config.globalProperties.$gitoad = Gitoad_api
    }
}

