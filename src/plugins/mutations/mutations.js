import mainPageModesMutations from "@/plugins/mutations/mainPageModesMutations";
import gitoadMutations from "@/plugins/mutations/gitoadMutations";
import trackMutations from "@/plugins/mutations/trackMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$gitoadMutations = gitoadMutations
        Vue.config.globalProperties.$trackMutations = trackMutations
    }
}