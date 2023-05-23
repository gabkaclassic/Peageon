import store from "@/js_part/data/storages/storages";

export default {

    async gitoadSetRepoMode() {

        await store.dispatch('gitoadSetRepoMode')
    },
    async gitoadSetCommitsMode() {

        await store.dispatch('gitoadSetCommitsMode')
    },
}