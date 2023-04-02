import store from "@/storages/storages";
import defaultHeaders from "@/plugins/apis/headers";

export default function() {

    const url = store.getters.gitoadBaseUrl + 'repositories'

    return {

        async getAllRepos() {
            return await fetch(url + "/all", {
                method: "GET",
                credentials: 'include',
                headers: defaultHeaders.jsonHeader,
            })
        },
    }
}