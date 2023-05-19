import store from "@/js_part/data/storages/storages";

export default {

    async gitoadOpenMessageModal() {

        await store.dispatch('gitoadOpenMessageModal')
    },
    async gitoadCloseMessageModal() {

        await store.dispatch('gitoadCloseMessageModal')
    },
    async gitoadOpenRepositoryModal() {

        await store.dispatch('gitoadOpenRepositoryModal')
    },
    async gitoadCloseRepositoryModal() {

        await store.dispatch('gitoadCloseRepositoryModal')
    },
    async gitoadOpenUploadModal() {
        await store.dispatch('gitoadOpenUploadModal')
    },
    async gitoadCloseUploadModal() {
        await store.dispatch('gitoadCloseUploadModal')
    },
}