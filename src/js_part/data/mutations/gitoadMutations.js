import store from "@/js_part/data/storages/storages";

export default {
    async gitoadNotExist() {
        await store.dispatch('gitoadSetExist', false)
    },
    async gitoadExist() {
        await store.dispatch('gitoadSetExist', true)
    },
    async gitoadSetExist(value) {
        await store.dispatch('gitoadSetExist', value)
    },
    async gitoadSetAuth(value) {
        await store.dispatch('gitoadSetAuthenticated', value)
    },
    async gitoadAuth() {
        await store.dispatch('gitoadSetAuthenticated', true)
    },
    async gitoadNotAuth() {
        await store.dispatch('gitoadSetAuthenticated', false)
    },
    async gitoadSetPath(value) {
        await store.dispatch('gitoadSetPath', value)
    },
    async gitoadSetRepositoryName(value) {
        await store.dispatch('gitoadSetRepositoryName', value)
    },
    async gitoadSetBranch(value) {
        await store.dispatch('gitoadSetBranch', value)
    },
    async gitoadSetLogin(value) {
        await store.dispatch('gitoadSetLogin', value)
    },
    async gitoadSetRepository(value) {
        await store.dispatch('gitoadSetRepository', value)
    },
    async gitoadRemoveRepository() {
        await store.dispatch('gitoadSetRepository', null)
    },
    async gitoadSetLangsInfo(value) {

        await store.dispatch('gitoadSetLangsInfo', value)
    },
    async gitoadClearFile(value) {

        await store.dispatch('gitoadClearFile', value)
    },
    async gitoadSetFile(value) {

        await store.dispatch('gitoadSetFile', value)
    },
    async gitoadOpenMessageModal() {

        await store.dispatch('gitoadOpenMessageModal')
    },
    async gitoadCloseMessageModal() {

        await store.dispatch('gitoadCloseMessageModal')
    },
    async gitoadOpenRepositoryModal() {

        await store.dispatch('gitoadOpenRepositoryModal')
    },
    async gitoadCloseRepositoryModal() {

        await store.dispatch('gitoadCloseRepositoryModal')
    },
}