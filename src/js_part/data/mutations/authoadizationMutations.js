import store from "@/js_part/data/storage/storages";

export default {
    async authoadizationLogin(value) {
        console.log(value);
        await store.dispatch('authoadizationLogin', value)
    },
    async authoadizationLogout() {
        await store.dispatch('authoadizationLogout')
    },
}