import store from "@/js_part/storage/storages";

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
    async gitoadSetRepository(value) {
        await store.dispatch('gitoadSetRepository', value)
    },
    async gitoadSetBranch(value) {
        await store.dispatch('gitoadSetBranch', value)
    },
    async gitoadSetLogin(value) {
        await store.dispatch('gitoadSetLogin', value)
    },
}