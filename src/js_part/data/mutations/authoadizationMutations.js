import store from "@/js_part/data/storages/storages";

export default {
    async authoadizationLogin(value) {
        await store.dispatch('authoadizationLogin', value)
    },
    async authoadizationLogout() {
        await store.dispatch('authoadizationLogout')
    },
}