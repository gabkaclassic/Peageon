import globalModesMutations from "@/plugins/mutations/globalModesMutations";
import mainPageModesMutations from "@/plugins/mutations/mainPageModesMutations";
import gitoadMutations from "@/plugins/mutations/gitoadMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$changeGlobalMode = globalModesMutations
        Vue.config.globalProperties.$gitoadMutations = gitoadMutations
    }
}