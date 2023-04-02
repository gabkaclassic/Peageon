
import store from '@/storages/storages'
import headers from '@/plugins/apis/headers/headers'
import { pathVariables } from '@/plugins/apis/GetpathVariablesUrl'
export default function() {

    const url = store.getters.authoadizationBaseUrl + 'auth'

    return {
        async login(data) {
            return await fetch( url + pathVariables(data), {
                method: "GET",
                headers: headers.jsonHeader()
            })
        },
        async registration(data) {
            return await fetch(url + pathVariables(data), {
                method: "POST",
                headers: headers.jsonHeader()
            })
        }
    }
}