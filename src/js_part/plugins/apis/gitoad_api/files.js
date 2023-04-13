import store from "@/js_part/storage/storages";
import {getFileInit} from "@/js_part/plugins/apis/inits/gitoad/getFileInit";

export default function() {

    const url = store.getters.gitoadBaseUrl + 'files'

    return {
        async getFile() {
            return await fetch(url, getFileInit())
        },
    }
}