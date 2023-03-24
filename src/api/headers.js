import store from "@/store/store";

export default {
    headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        credentials: 'include',
        'Auth-token': store.getters.sessionToken
    }
}