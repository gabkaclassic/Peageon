import headers from "@/plugins/apis/headers/headers";

export function getInit() {
    return {
        method: "GET",
        credentials: 'include',
        headers: headers.jsonHeader(),
    }
}

export function postInit(data) {
    return {
        method: "POST",
        credentials: 'include',
        headers: headers.jsonHeader(),
        body: JSON.stringify(data)
    }
}