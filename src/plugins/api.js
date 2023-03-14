import AuthoadizationApi from "@/api/authoadization_api";

export default {
    install(Vue) {
        Vue.config.globalProperties.$authoadization = AuthoadizationApi
    }
}

