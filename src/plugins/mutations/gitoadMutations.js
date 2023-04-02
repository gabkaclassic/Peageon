import store from "@/storages/storages";

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
}