
export default function (instance) {
    return {
        login(data) {
            return instance.get(`https://www.google.com/`, data,  {
                headers: {
                    accept: "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                crossorigin: true,
                crossOriginIsolated: true
            })
        },
        registration(data) {
            return instance.post('/auth', data)
        }
    }
}