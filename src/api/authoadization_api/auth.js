
import store from '@/store/store'
import defaultHeaders from '@/api/headers'
export default function() {

    const url = store.getters.authoadizationBaseUrl + 'auth'

    function dataToPathVariable(data) {
        let dataString = '?';

        for(let field in data)
            dataString += field + '=' + data[field]+'&'
        dataString = dataString.substring(0, dataString.length - 1)

        return dataString;
    }

    return {
        async login(data) {
            return await fetch( url + dataToPathVariable(data), {
                method: "GET",
                headers: defaultHeaders
            })
        },
        async registration(data) {
            return await fetch(url + dataToPathVariable(data), {
                method: "POST",
                headers: defaultHeaders
            })
        }
    }
}