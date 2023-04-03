import store from "@/storages/storages";

export default {
    async addToTrack(value) {
        await store.dispatch('addTrackElement', value)
    },
    async clearTrack(value) {
        await store.dispatch('clearTrack', value)
    },
    async removeFromTrack() {
        await store.dispatch('removeTrackElement')
    },
}