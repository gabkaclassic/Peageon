
import store from '@/storages/storages'
import defaultHeaders from '@/plugins/apis/headers'
import { pathVariables } from '@/plugins/apis/GetpathVariablesUrl'
export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'account'

    return {

        async login() {
            return await fetch(baseUrl + "/login", {
                method: "POST",
                credentials: 'include',
                headers: defaultHeaders.jsonHeader,
                body: JSON.stringify({
                    token: store.getters.sessionToken
                })
            })
        },
        async registration(data) {
            return await fetch(baseUrl + '/registration', {
                method: "POST",
                headers: defaultHeaders.jsonHeader,
                body: JSON.stringify(data)
            })
        },
        async exists() {
            return await fetch(baseUrl + '/exists' + pathVariables({token: store.getters.sessionToken}), {
                method: "GET",
                headers: defaultHeaders.jsonHeader,
            })
        }
    }
}