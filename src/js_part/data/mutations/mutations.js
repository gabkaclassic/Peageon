import mainPageModesMutations from "@/js_part/data/mutations/mainPageModesMutations";
import gitoadMutations from "@/js_part/data/mutations/gitoadMutations";
import authoadizationMutations from "@/js_part/data/mutations/authoadizationMutations";
import modalMutations from "@/js_part/data/mutations/modalMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$gitoadMutations = gitoadMutations
        Vue.config.globalProperties.$modalMutations = modalMutations
        Vue.config.globalProperties.$authoadizationMutations = authoadizationMutations
    }
}