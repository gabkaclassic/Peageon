import store from "@/js_part/data/storages/storages";
import {getInit, postInit} from "@/js_part/plugins/apis/inits/defaultInits";
import {pathVariables} from "@/js_part/plugins/apis/GetpathVariablesUrl";

export default function() {

    const url = store.getters.gitoadBaseUrl + 'repositories'

    return {

        async getAllRepos() {
            return await fetch(url + "/all", getInit())
        },
        async getRepo(data) {
            return await fetch(url + "/get" + pathVariables(data), getInit())
        },
        async create(data) {
            return await fetch(url +  "/create", postInit(data))
        },
    }
}