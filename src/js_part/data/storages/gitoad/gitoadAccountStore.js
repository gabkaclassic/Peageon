const EXISTS = 'GITOAD_EXISTS'
const AUTH = 'GITOAD_AUTH'
const LOGIN = 'GITOAD_LOGIN'
const PROFILE = 'GITOAD_PROFILE_URL'
export default {

    state: {
        exist: (sessionStorage.getItem(EXISTS) === null) ? false : sessionStorage.getItem(EXISTS),
        gitoadAuthenticated: (sessionStorage.getItem(AUTH) === undefined) ? false : sessionStorage.getItem(AUTH),
        gitoadLogin: (sessionStorage.getItem(LOGIN) === null) ? false : sessionStorage.getItem(LOGIN),
        gitoadProfileUrl: (sessionStorage.getItem(PROFILE) === null) ? false : sessionStorage.getItem(PROFILE),
    },
    getters: {
        gitoadExist(state) {
            return state.exist
        },
        gitoadProfileUrl(state) {
            return state.gitoadProfileUrl
        },
        gitoadLogin(state) {
            return state.gitoadLogin
        },
        gitoadAuth(state) {
            if(state.gitoadAuthenticated === undefined || state.gitoadAuthenticated === null)
                state.gitoadAuthenticated = false
            return state.gitoadAuthenticated
        },
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
        SET_GITOAD_PROFILE_URL(state, value) {
            sessionStorage.setItem(PROFILE, value)
            state.gitoadProfileUrl = value
        },
         SET_GITOAD_LOGIN(state, value) {
            sessionStorage.setItem(LOGIN, value)
            state.gitoadLogin = value
        },
    },
    actions: {
        async gitoadSetAuthenticated(context, value) {
            context.commit('SET_GITOAD_AUTH', value)
        },
        async gitoadSetExist(context, value) {
            context.commit('SET_GITOAD_EXIST', value)
        },
        gitoadSetProfileUrl(context, value) {
            context.commit('SET_GITOAD_PROFILE_URL', value)
        },
        async gitoadSetLogin(context, value) {
            context.commit('SET_GITOAD_LOGIN', value)
        },
    }
}