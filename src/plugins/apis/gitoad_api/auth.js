import store from '@/storages/storages'
import headers from '@/plugins/apis/headers/headers'
import {pathVariables} from '@/plugins/apis/GetpathVariablesUrl'

export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'account'

    return {

        async login() {
            return await fetch(baseUrl + "/login", {
                method: "POST",
                credentials: 'include',
                headers: headers.jsonHeader(),
                body: JSON.stringify({
                    token: store.getters.sessionToken
                })
            })
        },
        async registration(data) {
            return await fetch(baseUrl + '/registration', {
                method: "POST",
                credentials: 'include',
                headers: headers.jsonHeader(),
                body: JSON.stringify(data)
            })
        },
        async exists() {
            return await fetch(baseUrl + '/exists' + pathVariables({token: store.getters.sessionToken}), {
                method: "GET",
                credentials: 'include',
                headers: headers.jsonHeader(),
            })
        },
        async myself() {
            return await fetch(baseUrl + '/myself', {
                method: "GET",
                credentials: 'include',
                headers: headers.jsonHeader(),
            })
        },
    }
}