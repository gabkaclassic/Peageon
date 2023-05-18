import store from "@/js_part/data/storages/storages";
import {postInit} from "@/js_part/plugins/apis/inits/defaultInits";

export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'commits'

    return {

        async commit(data) {
            return await fetch(baseUrl + "/upload", postInit(data))
        },
    }
}