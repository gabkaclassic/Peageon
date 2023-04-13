
const EXISTS = 'GITOAD_EXISTS'
const AUTH = 'GITOAD_AUTH'
const REPOSITORY = 'GITOAD_REPOSITORY'
const BRANCH = 'GITOAD_BRANCH'
const PATH = 'GITOAD_PATH'
const LOGIN = 'GITOAD_LOGIN'
export default {

    state: {
        exist: (sessionStorage.getItem(EXISTS) === null) ? false : sessionStorage.getItem(EXISTS),
        gitoadAuthenticated: (sessionStorage.getItem(AUTH) === null) ? false : sessionStorage.getItem(AUTH),
        currentBranch: (sessionStorage.getItem(BRANCH) === null) ? false : sessionStorage.getItem(BRANCH),
        currentRepository: (sessionStorage.getItem(REPOSITORY) === null) ? false : sessionStorage.getItem(REPOSITORY),
        currentPath: (sessionStorage.getItem(PATH) === null) ? false : sessionStorage.getItem(PATH),
        gitoadLogin: (sessionStorage.getItem(LOGIN) === null) ? false : sessionStorage.getItem(LOGIN),
    },
    getters: {
        gitoadExist(state) {
            return state.exist
        },
        gitoadAuth(state) {
            return state.gitoadAuthenticated
        },
        gitoadBranch(state) {
            return state.currentBranch
        },
        gitoadPath(state) {
            return state.currentPath
        },
        gitoadFullRepository(state) {
            return state.gitoadLogin + '/' + state.currentRepository
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
        SET_GITOAD_PATH(state, value) {
            sessionStorage.setItem(PATH, value)
            state.currentPath = value
        },
        SET_GITOAD_BRANCH(state, value) {
            sessionStorage.setItem(BRANCH, value)
            state.currentBranch = value
        },
        SET_GITOAD_REPOSITORY(state, value) {
            sessionStorage.setItem(REPOSITORY, value)
            state.currentRepository = value
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
        async gitoadSetBranch(context, value) {
            context.commit('SET_GITOAD_BRANCH', value)
        },
        async gitoadSetPath(context, value) {
            context.commit('SET_GITOAD_PATH', value)
        },
        async gitoadSetRepository(context, value) {
            context.commit('SET_GITOAD_REPOSITORY', value)
        },
        async gitoadSetLogin(context, value) {
            context.commit('SET_GITOAD_LOGIN', value)
        },
    }
}