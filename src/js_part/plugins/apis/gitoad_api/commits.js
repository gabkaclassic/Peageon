import store from "@/js_part/data/storage/storages";
import {putInit} from "@/js_part/plugins/apis/inits/defaultInits";

export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'files'

    return {

        async commit(data) {
            console.log(putInit(data));
            return await fetch(baseUrl, putInit(data))
        },
    }
}