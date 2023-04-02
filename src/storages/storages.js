import Vuex from 'vuex';
import mainPageStore from "@/storages/mainPageStore";
import sessionStore from "@/storages/sessionStore";
import urlStore from "@/storages/urlStore";
import gitoadStore from "@/storages/gitoadStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
        gitoadStore: gitoadStore
    }
})