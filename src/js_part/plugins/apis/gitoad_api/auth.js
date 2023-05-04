import store from '@/js_part/data/storages/storages'
import {pathVariables} from '@/js_part/plugins/apis/GetpathVariablesUrl'
import {getInit, postInit} from "@/js_part/plugins/apis/inits/defaultInits";

export default function() {

    const baseUrl = store.getters.gitoadBaseUrl + 'account'

    return {

        async login() {
            return await fetch(baseUrl + "/login", postInit())
        },
        async registration(data) {
            return await fetch(baseUrl + '/registration', postInit(data))
        },
        async exists() {
            return await fetch(baseUrl + '/exists' + pathVariables(), getInit())
        },
        async myself() {
            return await fetch(baseUrl + '/myself', getInit())
        },
    }
}