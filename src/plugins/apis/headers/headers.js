import store from "@/storages/storages";

export default {

    jsonHeader() {
        return new Headers({
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Auth-token': store.getters.sessionToken,
            'cookie': ''
        })
    }
}