
const EXISTS = 'GITOAD_EXISTS'
const AUTH = 'GITOAD_AUTH'
export default {

    state: {
        exist: (sessionStorage.getItem(EXISTS) === null) ? false : sessionStorage.getItem(EXISTS),
        gitoadAuthenticated: (sessionStorage.getItem(AUTH) === null) ? false : sessionStorage.getItem(AUTH),
    },
    getters: {
        gitoadExist(state) {
            return state.exist
        },
        gitoadAuth(state) {
            return state.gitoadAuthenticated
        }
    },
    mutations: {
        SET_GITOAD_EXIST(state, value) {
            sessionStorage.setItem(EXISTS, value)
            state.exist = value
        },
        SET_GITOAD_AUTH(state, value) {
            sessionStorage.setItem(AUTH, value)
            state.gitoadAuthenticated = value
        },
    },
    actions: {
        async gitoadSetAuthenticated(context, value) {
            context.commit('SET_GITOAD_AUTH', value)
        },
        async gitoadSetExist(context, value) {
            context.commit('SET_GITOAD_EXIST', value)
        },
    }
}