

const TOKEN = 'AUTHOADIZATION_TOKEN'
export default {

    state: {
        token: (sessionStorage.getItem(TOKEN) === null) ? '' : sessionStorage.getItem(TOKEN),
    },
    getters: {
        authenticated(state) {
            let t = state.token
            return t !== null && t.length > 0;
        },
        token(state) {
            return state.token
        }
    },
    mutations: {
        SET_TOKEN(state, value) {
            sessionStorage.setItem(TOKEN, value)
            state.token = value
        },
    },
    actions: {
        async authoadizationLogin(context, value) {
            context.commit('SET_TOKEN',  value)
        },
        async authoadizationLogout(context) {
            context.commit('SET_TOKEN', null)
        }
    }
}