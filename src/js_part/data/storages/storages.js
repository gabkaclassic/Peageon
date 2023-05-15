import Vuex from 'vuex';
import mainPageStore from "@/js_part/data/storages/peageon/mainPageStore";
import sessionStore from "@/js_part/data/storages/peageon/sessionStore";
import urlStore from "@/js_part/data/storages/peageon/urlStore";
import gitoadStore from "@/js_part/data/storages/gitoad/gitoadStore";
import currentRepositoryStore from "@/js_part/data/storages/gitoad/currentRepositoryStore";
import currentFileStore from "@/js_part/data/storages/gitoad/currentFileStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
        gitoadStore: gitoadStore,
        repositoryStore: currentRepositoryStore,
        currentFileStore: currentFileStore,
    },
})