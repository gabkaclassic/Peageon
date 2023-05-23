const modes = {
    commits: 'COMMITS',
    repo: "REPO"
}
const MODE = 'GITOAD_MODE'

export default {
    state: {
        gitoadMode: sessionStorage.getItem(MODE) ? sessionStorage.getItem(MODE) : modes.repo,
    },
    getters: {
        gitoadRepoMode(state) {
            return state.gitoadMode === modes.repo
        },
        gitoadCommitsMode(state) {
            return state.gitoadMode === modes.commits
        },
    },
    mutations: {
        SET_GITOAD_MODE(state, value) {
            sessionStorage.setItem(MODE, value)
            state.gitoadMode = value
        },
    },
    actions: {
        async gitoadSetRepoMode(context){
            context.commit('SET_GITOAD_MODE', modes.repo)
        },
        async gitoadSetCommitsMode(context){
            context.commit('SET_GITOAD_MODE', modes.commits)
        },
    }
}