
import store from '@/storages/storages'
import defaultHeaders from '@/plugins/apis/headers'
export default function() {

    const url = store.getters.gitoadBaseUrl

    return {

        async login() {
            return await fetch(url + "account/login", {
                method: "POST",
                headers: defaultHeaders.jsonHeader,
                body: JSON.stringify({
                    token: store.getters.sessionToken
                })
            })
        },
        async registration(data) {
            return await fetch(url + 'account/registration', {
                method: "POST",
                headers: defaultHeaders.jsonHeader,
                body: JSON.stringify(data)
            })
        },
        async exists() {
            return await fetch(url + 'account/exists', {
                method: "GET",
                headers: defaultHeaders.jsonHeader,
                body: JSON.stringify({
                    token: store.getters.sessionToken
                })
            })
        }
    }
}