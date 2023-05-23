import store from "@/js_part/data/storages/storages";

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