const mainPageModes = {
    main: 'MAIN',
    login: 'LOGIN',
    registry: 'REGISTRATION',
    logout: 'LOGOUT',
}

export default {

    state: {
        mode: mainPageModes.main
    },
    getters: {
        main(state) {
            return state.mode === mainPageModes.main
        },
        loginMode(state) {
            return state.mode === mainPageModes.login
        },
        registrationMode(state) {
            return state.mode === mainPageModes.registry
        },
        logoutMode(state) {
            return state.mode === mainPageModes.logout
        },
    },
    mutations: {
        SET_PAGE_MODE(state, value) {
            state.mode = value
        },
    },
    actions: {

        async setMainMode(context) {
            context.commit('SET_PAGE_MODE', mainPageModes.main)
        },
        async setLoginMode(context) {
            context.commit('SET_PAGE_MODE', mainPageModes.login)
        },
        async setRegistrationMode(context) {
            context.commit('SET_PAGE_MODE', mainPageModes.registry)
        },
        async setLogoutMode(context) {
            context.commit('SET_PAGE_MODE', mainPageModes.logout)
        },
    }
}