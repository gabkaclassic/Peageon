import Vuex from 'vuex';
import mainPageStore from "@/storages/mainPageStore";
import sessionStore from "@/storages/sessionStore";
import urlStore from "@/storages/urlStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
    }
})