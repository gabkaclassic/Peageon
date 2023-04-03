import trackElements from "@/js_part/templates/trackBar/elelments/TrackElements";

const TOKEN = 'AUTHOADIZATION_TOKEN'
const TRACK = 'TRACK'
export default {

    state: {
        track: (sessionStorage.getItem(TRACK) === null || sessionStorage.getItem(TRACK).length === 0) ? [trackElements.elements.spoad] : JSON.parse(sessionStorage.getItem(TRACK)),
        token: (sessionStorage.getItem(TOKEN) === null) ? '' : sessionStorage.getItem(TOKEN),
    },
    getters: {
        authenticated(state) {
            let t = state.token
            return t !== null && t.length > 0;
        },
        sessionToken(state) {
            return state.token
        },
        track(state) {
            return state.track
        }
    },
    mutations: {
        SET_TOKEN(state, value) {
            sessionStorage.setItem(TOKEN, value)
            state.token = value
        },
        ADD_TO_TRACK(state, value) {
            state.track.push(value)
            sessionStorage.setItem(TRACK, JSON.stringify(state.track))
        },
        REMOVE_FROM_TRACK(state) {
            state.track.pop()
            sessionStorage.setItem(TRACK, JSON.stringify(state.track))
        },
        CLEAR_TRACK(state, value) {
            console.log(value);
            state.track = []
            state.track.push(value)
            sessionStorage.setItem(TRACK, JSON.stringify(state.track))
        },
    },
    actions: {
        async setToken(context, value) {
            context.commit('SET_TOKEN', value)
        },
        async clearToken(context) {
            context.commit('SET_TOKEN', null)
            sessionStorage.removeItem(TOKEN)
        },
        async addTrackElement(context, value) {
            context.commit('ADD_TO_TRACK', value)
        },
        async clearTrack(context, value) {
            context.commit('CLEAR_TRACK', value)
        },
        async removeTrackElement(context){
            context.commit('REMOVE_FROM_TRACK')
        }
    }
}