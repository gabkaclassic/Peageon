
import store from '@/storages/storages'
import defaultHeaders from '@/plugins/apis/headers'
import { pathVariables } from '@/plugins/apis/GetpathVariablesUrl'
export default function() {

    const url = store.getters.authoadizationBaseUrl + 'auth'

    return {
        async login(data) {
            return await fetch( url + pathVariables(data), {
                method: "GET",
                headers: defaultHeaders.jsonHeader
            })
        },
        async registration(data) {
            return await fetch(url + pathVariables(data), {
                method: "POST",
                headers: defaultHeaders.jsonHeader
            })
        }
    }
}