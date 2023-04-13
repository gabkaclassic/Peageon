import mainPageModesMutations from "@/js_part/plugins/mutations/mainPageModesMutations";
import gitoadMutations from "@/js_part/plugins/mutations/gitoadMutations";
import authoadizationMutations from "@/js_part/plugins/mutations/authoadizationMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$gitoadMutations = gitoadMutations
        Vue.config.globalProperties.$authoadizationMutations = authoadizationMutations
    }
}