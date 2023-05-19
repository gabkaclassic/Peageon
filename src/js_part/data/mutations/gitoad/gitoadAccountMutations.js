import store from "@/js_part/data/storages/storages";

export default {
    async gitoadExist() {
        await store.dispatch('gitoadSetExist', true)
    },
    async gitoadSetExist(value) {
        await store.dispatch('gitoadSetExist', value)
    },
    async gitoadSetAuth(value) {
        await store.dispatch('gitoadSetAuthenticated', value)
    },
    async gitoadNotAuth() {
        await store.dispatch('gitoadSetAuthenticated', false)
    },
    async gitoadSetLogin(value) {
        await store.dispatch('gitoadSetLogin', value)
    },
    async gitoadSetProfileUrl(value) {
        await store.dispatch('gitoadSetProfileUrl', value)
    },
}