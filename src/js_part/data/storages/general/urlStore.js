export default {
    state: {
        authoadizationBaseUrl: 'https://1462419-ck65966.tw1.ru:5004/',
        // gitoadBaseUrl: 'https://localhost:5001/',
        gitoadBaseUrl: 'https://1462419-ck65966.tw1.ru:5001/',


    },
    getters: {
        authoadizationBaseUrl(state) {
            return state.authoadizationBaseUrl;
        },
        gitoadBaseUrl(state) {
            return state.gitoadBaseUrl;
        },
    },
}