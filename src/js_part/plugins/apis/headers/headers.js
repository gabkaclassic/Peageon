import store from "@/js_part/data/storages/storages";

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
