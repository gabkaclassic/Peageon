
import store from '@/storages/storages'
import { pathVariables } from '@/plugins/apis/GetpathVariablesUrl'
import {getInit, postInit} from "@/plugins/apis/inits/defaultInits";
export default function() {

    const url = store.getters.authoadizationBaseUrl + 'auth'

    return {
        async login(data) {
            return await fetch( url + pathVariables(data), getInit())
        },
        async registration(data) {
            return await fetch(url + pathVariables(data), postInit())
        }
    }
}