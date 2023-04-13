import store from "@/js_part/storage/storages";

export default {
    async login() {
        await store.dispatch('setLoginMode')
    },
    async registration() {
        await store.dispatch('setRegistrationMode')
    },
    async main() {
        await store.dispatch('setMainMode')
    },
}