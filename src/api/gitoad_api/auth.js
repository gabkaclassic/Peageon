
import store from '@/store/store'
import defaultHeaders from '@/api/headers'
export default function() {

    const url = store.getters.gitoadBaseUrl

    return {

        async login(by) {
            return await fetch(url + "account/login", {
                method: "POST",
                headers: defaultHeaders,
                body: JSON.stringify({
                    id: store.getters.id,
                    by: by
                })
            })
        },
        async registration(data) {
            return await fetch(url + 'account/update', {
                method: "POST",
                headers: defaultHeaders,
                body: JSON.stringify(data)
            })
        }
    }
}