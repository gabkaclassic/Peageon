import Vuex from 'vuex';
import mainPageStore from "@/js_part/storage/mainPageStore";
import sessionStore from "@/js_part/storage/sessionStore";
import urlStore from "@/js_part/storage/urlStore";
import gitoadStore from "@/js_part/storage/gitoadStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
        gitoadStore: gitoadStore
    }
})