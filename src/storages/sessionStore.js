const globalModes = {
    main: 'MAIN',
    gitoad: 'GITOAD',
}
const TOKEN = 'WT'
const MODE = 'MODE'
export default {

    state: {
        mode: (sessionStorage.getItem(MODE) === null) ? globalModes.main : sessionStorage.getItem(MODE)
    },
    getters: {
        authenticated() {
            let t = (sessionStorage.getItem(TOKEN) === null) ? '' : sessionStorage.getItem(TOKEN)
            return t !== null && t.length > 0;
        },
        sessionToken() {
            return (sessionStorage.getItem(TOKEN) === null) ? '' : sessionStorage.getItem(TOKEN)
        },
        mainMode(state) {
            return state.mode === globalModes.main
        },
        gitoadMode(state) {
            return state.mode === globalModes.gitoad
        },
    },
    mutations: {
        SET_TOKEN(state, value) {
            sessionStorage.setItem(TOKEN, value)
        },
        SET_MODE(state, value) {
            sessionStorage.setItem(MODE, value)
            state.mode = value
        },
    },
    actions: {
        async setToken(context, value) {
            context.commit('SET_TOKEN', value)
        },
        async clearToken(context) {
            context.commit('SET_TOKEN', null)
        },
        async setGlobalMainMode(context) {
            context.commit('SET_MODE', globalModes.main)
        },
        async setGitoadMode(context) {
            context.commit('SET_MODE', globalModes.gitoad)
        },
    }
}