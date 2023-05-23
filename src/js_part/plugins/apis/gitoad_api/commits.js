import store from "@/js_part/data/storages/storages";
import {putInit} from "@/js_part/plugins/apis/inits/defaultInits";

export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'files'

    return {

        async commit(data) {
            return await fetch(baseUrl, putInit(data))
        },
    }
}