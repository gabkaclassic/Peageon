import store from "@/storages/storages";

export default {
    jsonHeader: new Headers({
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        credentials: 'include',
        'Content-Type': 'application/json',
        'Auth-token': store.getters.sessionToken
    })
}