import store from "@/storages/storages";
import headers from "@/plugins/apis/headers/headers";

export default function() {

    const url = store.getters.gitoadBaseUrl + 'repositories'

    return {

        async getAllRepos() {
            return await fetch(url + "/all", {
                method: "GET",
                credentials: 'include',
                headers: headers.jsonHeader(),
            })
        },
    }
}