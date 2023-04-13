import store from "@/js_part/storage/storages";

export default {

    jsonHeader() {
        return new Headers({
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'authorization': store.getters.token
        })
    }
}
