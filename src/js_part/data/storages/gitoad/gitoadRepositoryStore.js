const REPOSITORY = 'GITOAD_REPOSITORY'
const BRANCH = 'GITOAD_BRANCH'
const PATH = 'GITOAD_PATH'
const COMMITS = 'GITOAD_COMMITS'
export default {

    state: {
        currentBranch: (sessionStorage.getItem(BRANCH) === null) ? '' : sessionStorage.getItem(BRANCH),
        currentRepository: (sessionStorage.getItem(REPOSITORY) === null) ? '' : sessionStorage.getItem(REPOSITORY),
        currentPath: (sessionStorage.getItem(PATH) === null) ? '' : sessionStorage.getItem(PATH),
        gitoadCommits: sessionStorage.getItem(COMMITS) ? JSON.parse(sessionStorage.getItem(COMMITS)) : [],
    },
    getters: {
        gitoadBranch(state) {
            return state.currentBranch
        },
        gitoadPath(state) {
            return state.currentPath
        },
        gitoadFullRepository(state) {
            return state.gitoadLogin + '/' + state.currentRepository
        },
        gitoadCommits(state) {
            return state.gitoadCommits
        },
    },
    mutations: {
        SET_GITOAD_PATH(state, value) {
            sessionStorage.setItem(PATH, value)
            state.currentPath = value
        },
        SET_GITOAD_BRANCH(state, value) {
            sessionStorage.setItem(BRANCH, value)
            state.currentBranch = value
            console.log(sessionStorage.getItem(BRANCH));
        },
        SET_GITOAD_REPOSITORY_NAME(state, value) {
            sessionStorage.setItem(REPOSITORY, value)
            state.currentRepository = value
        },
        SET_GITOAD_COMMITS(state, value) {

            sessionStorage.setItem(COMMITS, JSON.stringify(value))
            state.gitoadCommits = value
        },
    },
    actions: {
        async gitoadSetBranch(context, value) {
            context.commit('SET_GITOAD_BRANCH', value)
        },
        async gitoadSetPath(context, value) {
            context.commit('SET_GITOAD_PATH', value)
        },
        async gitoadSetRepositoryName(context, value) {
            context.commit('SET_GITOAD_REPOSITORY_NAME', value)
        },
        async gitoadSetCommits(context, value) {
            context.commit('SET_GITOAD_COMMITS', value)
        },
    }
}