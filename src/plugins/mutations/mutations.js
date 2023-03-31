import globalModesMutations from "@/plugins/mutations/globalModesMutations";
import mainPageModesMutations from "@/plugins/mutations/mainPageModesMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$changeGlobalMode = globalModesMutations
    }
}