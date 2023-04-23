export default {
    state: {
        authoadizationBaseUrl: 'http://localhost:5004/',
        gitoadBaseUrl: 'http://localhost:5001/',
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