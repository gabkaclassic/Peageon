const FILES = 'GITOAD_FILES'
export default {
    state: {
        currentFiles: JSON.parse(sessionStorage.getItem(FILES)),
        uploadModal: false,
    },
    getters: {
        currentFiles(state) {
            return state.currentFiles
        },
        uploadModal(state) {
            return state.uploadModal
        },
    },
    mutations: {
        SET_FILES(state, value) {
            sessionStorage.setItem(FILES, JSON.stringify(value))
            state.currentFiles = value
        },
        CLEAR_FILES(state) {
            sessionStorage.setItem(FILES, [])
            state.currentFiles = []
        },
        SET_UPLOAD_MODAL(state, value) {
            state.uploadModal = value
        },
    },
    actions: {
        async gitoadSetFiles(context, value){
            context.commit('SET_FILES', value)
        },
        async gitoadClearFiles(context){
            context.commit('CLEAR_FILES')
        },
        async gitoadOpenUploadModal(context){
            context.commit('SET_UPLOAD_MODAL', true)
        },
        async gitoadCloseUploadModal(context){
            context.commit('SET_UPLOAD_MODAL', false)
        },
    }
}