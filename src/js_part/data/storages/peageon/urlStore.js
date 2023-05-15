export default {
    state: {

        // gitoadBaseUrl: 'https://localhost:5001/',
        authoadizationBaseUrl: 'https://1462419-ck65966.tw1.ru:5004/',
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