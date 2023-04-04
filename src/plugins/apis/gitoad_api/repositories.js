import store from "@/storages/storages";
import {getInit} from "@/plugins/apis/inits/defaultInits";
import {pathVariables} from "@/plugins/apis/GetpathVariablesUrl";

export default function() {

    const url = store.getters.gitoadBaseUrl + 'repositories'

    return {

        async getAllRepos() {
            return await fetch(url + "/all", getInit())
        },
        async getRepo(data) {
            return await fetch(url + "/get" + pathVariables(data), getInit())
        },
    }
}