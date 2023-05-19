import mainPageModesMutations from "@/js_part/data/mutations/general/mainPageModesMutations";
import authoadizationMutations from "@/js_part/data/mutations/authoadization/authoadizationMutations";
import modalMutations from "@/js_part/data/mutations/gitoad/gitoadModalMutations";
import gitoadModesMutations from "@/js_part/data/mutations/gitoad/gitoadModesMutations";
import gitoadAccountMutations from "@/js_part/data/mutations/gitoad/gitoadAccountMutations";
import gitoadFileMutations from "@/js_part/data/mutations/gitoad/gitoadFileMutations";
import gitoadRepositoryMutations from "@/js_part/data/mutations/gitoad/gitoadRepositoryMutations";

export default {
    install(Vue) {
        Vue.config.globalProperties.$changeMainPageMode = mainPageModesMutations
        Vue.config.globalProperties.$gitoadAccountMutations = gitoadAccountMutations
        Vue.config.globalProperties.$gitoadFileMutations = gitoadFileMutations
        Vue.config.globalProperties.$gitoadRepositoryMutations = gitoadRepositoryMutations
        Vue.config.globalProperties.$modalMutations = modalMutations
        Vue.config.globalProperties.$authoadizationMutations = authoadizationMutations
        Vue.config.globalProperties.$gitoadModesMutations = gitoadModesMutations
    }
}