import store from "@/js_part/data/storages/storages";

export default {
    async gitoadClearFile(value) {

        await store.dispatch('gitoadClearFile', value)
    },
    async gitoadSetFile(value) {

        await store.dispatch('gitoadSetFile', value)
    },
    async gitoadSetPath(value) {
        await store.dispatch('gitoadSetPath', value)
    },
}