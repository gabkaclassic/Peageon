import store from "@/js_part/data/storages/storages";

export default {

    async gitoadSetRepository(value) {
        await store.dispatch('gitoadSetRepository', value)
    },
    async gitoadRemoveRepository() {
        await store.dispatch('gitoadSetRepository', null)
    },
    async gitoadSetLangsInfo(value) {

        await store.dispatch('gitoadSetLangsInfo', value)
    },
    async gitoadSetRepositoryName(value) {
        await store.dispatch('gitoadSetRepositoryName', value)
    },
    async gitoadSetBranch(value) {
        await store.dispatch('gitoadSetBranch', value)
    },
    async gitoadSetCommits(value) {
        await store.dispatch('gitoadSetCommits', value)
    },
}