import store from "@/storages/storages";

export default {
    async globalMain() {
        await store.dispatch('setGlobalMainMode')
    },
    async gitoad() {
        await store.dispatch('setGitoadMode')
    },
}