import {toRaw} from "vue";

const REPO = 'GITOAD_REPO'
const LANGS_INFO = ""
export default {
    state: {
        currentRepository: JSON.parse(sessionStorage.getItem(REPO)),
        langsInfo: JSON.parse(sessionStorage.getItem(LANGS_INFO)),
        repositoryModal: false,
    },
    getters: {
        currentRepository(state) {
            return state.currentRepository
        },
        langsInfo(state) {
            return toRaw(state.langsInfo)
        },
        repositoryModal(state) {
            return state.repositoryModal
        },
    },
    mutations: {
        SET_REPO(state, value) {
            sessionStorage.setItem(REPO, JSON.stringify(value))
            state.currentRepository = value
        },
        SET_LANGS_INFO(state, value) {
            sessionStorage.setItem(LANGS_INFO, JSON.stringify(value))
            state.langsInfo = value
        },
        SET_REPOSITORY_MODAL(state, value) {
            state.repositoryModal = value
        },
    },
    actions: {
        async gitoadSetRepository(context, value){
            context.commit('SET_REPO', value)
        },
        async gitoadSetLangsInfo(context, value){
            context.commit('SET_LANGS_INFO', value)
        },
        async gitoadOpenRepositoryModal(context){
            context.commit('SET_REPOSITORY_MODAL', true)
        },
        async gitoadCloseRepositoryModal(context){
            context.commit('SET_REPOSITORY_MODAL', false)
        },
    }
}