import headers from "@/js_part/plugins/apis/headers/headers";
import store from "@/js_part/storage/storages";
export function getFileInit(message, content) {
    return {
        method: "POST",
        credentials: 'include',
        headers: headers.jsonHeader(),
        body: JSON.stringify({
            repository: store.getters.gitoadFullRepository,
            branch: store.getters.gitoadBranch,
            path: store.getters.gitoadPath,
            message: message,
            content: content
        })
    }
}