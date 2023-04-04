import store from '@/storages/storages'
import {pathVariables} from '@/plugins/apis/GetpathVariablesUrl'
import {getInit, postInit} from "@/plugins/apis/inits/defaultInits";

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
            return await fetch(baseUrl + '/exists' + pathVariables({token: store.getters.sessionToken}), getInit())
        },
        async myself() {
            return await fetch(baseUrl + '/myself', getInit())
        },
    }
}