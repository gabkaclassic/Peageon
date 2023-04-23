import Vuex from 'vuex';
import mainPageStore from "@/js_part/data/storage/mainPageStore";
import sessionStore from "@/js_part/data/storage/sessionStore";
import urlStore from "@/js_part/data/storage/urlStore";
import gitoadStore from "@/js_part/data/storage/gitoadStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
        gitoadStore: gitoadStore
    }
})