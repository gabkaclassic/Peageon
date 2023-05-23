
const FILE = 'GITOAD_FILE'
export default {
    state: {
        currentFile: JSON.parse(sessionStorage.getItem(FILE)),
        messageModal: false,
    },
    getters: {
        currentFile(state) {
            return state.currentFile
        },
        messageModal(state) {
            return state.messageModal
        },
    },
    mutations: {
        SET_FILE(state, value) {
            sessionStorage.setItem(FILE, JSON.stringify(value))
            state.currentFile = value
        },
        CLEAR_FILE(state) {
            sessionStorage.setItem(FILE, null)
            state.currentFile = null
        },
        SET_MESSAGE_MODAL(state, value) {
            state.messageModal = value
        },
    },
    actions: {
        async gitoadSetFile(context, value){
            context.commit('SET_FILE', value)
        },
        async gitoadClearFile(context){
            context.commit('CLEAR_FILE')
        },
        async gitoadOpenMessageModal(context){
            context.commit('SET_MESSAGE_MODAL', true)
        },
        async gitoadCloseMessageModal(context){
            context.commit('SET_MESSAGE_MODAL', false)
        },
    }
}