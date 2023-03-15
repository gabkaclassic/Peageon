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
        sessionToken: ''
    },
    getters: {
        authenticated(state) {
            return state.sessionToken.length > 0;
        },
        sessionToken(state) {
            return state.sessionToken
        }
    },
    mutations: {
        SET_TOKEN(state, value) {
            state.sessionToken = value
        }
    },
    actions: {
        async setToken(context, value) {
            context.commit('SET_TOKEN', value)
        }
    }
}
export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore
    }
})