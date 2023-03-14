import Vuex from 'vuex';


const urlStore = {
    state: {
        authoadizationBaseUrl: 'http://localhost:5004/',
        gitoadBaseUrl: 'http://localhost:5002/',
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

const sessionStore = {
    state: {
        authenticated: false
    },
    getters: {
        authenticated(state) {
            return state.authenticated;
        }
    },
    mutations: {
        CHANGE_AUTH(state) {
            state.authenticated = !state.authenticated
        }
    },
    actions: {
        async changeAuth(context) {
            context.commit('CHANGE_AUTH')
        }
    }
}
export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore
    }
})