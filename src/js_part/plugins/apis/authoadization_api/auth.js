
import store from '@/js_part/data/storage/storages'
import { pathVariables } from '@/js_part/plugins/apis/GetpathVariablesUrl'
import {getInit, postInit} from "@/js_part/plugins/apis/inits/defaultInits";
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