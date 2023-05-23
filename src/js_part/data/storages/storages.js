import Vuex from 'vuex';
import mainPageStore from "@/js_part/data/storages/general/mainPageStore";
import sessionStore from "@/js_part/data/storages/general/sessionStore";
import urlStore from "@/js_part/data/storages/general/urlStore";
import currentRepositoryStore from "@/js_part/data/storages/gitoad/currentRepositoryStore";
import currentFileStore from "@/js_part/data/storages/gitoad/currentFileStore";
import uploadFileStore from "@/js_part/data/storages/gitoad/uploadFileStore";
import gitoadModesStore from "@/js_part/data/storages/gitoad/gitoadModesStore";
import gitoadAccountStore from "@/js_part/data/storages/gitoad/gitoadAccountStore";
import gitoadRepositoryStore from "@/js_part/data/storages/gitoad/gitoadRepositoryStore";


export default new Vuex.Store({
    modules: {
        urlStore: urlStore,
        sessionStore: sessionStore,
        mainPageStore: mainPageStore,
        gitoadAccountStore: gitoadAccountStore,
        gitoadRepositoryStore: gitoadRepositoryStore,
        gitoadModesStore: gitoadModesStore,
        repositoryStore: currentRepositoryStore,
        currentFileStore: currentFileStore,
        uploadFileStore: uploadFileStore,
    },
})