<template>

    <main class="repository">

         <div class="content-rep" v-if="!loadingRepo">

            <repository-info
                :current-branch="repository.currentBranch"
                :branches="repository.branches"
                :owner="repository.owner"
                :title="repository.name"
                @changeBranch="(branch) => changeCurrentBranch(branch)"
            />

             <section class="info">
                <repository-settings />
               <langs-info :languages="repository.languages"/>
             </section>


                <section class="main-grid">
                    <div class="main-grid__line-com">
                        <p class="main-grid__text-com" ><img class="main-grid__icon" src="@/css_part/images/icons8-таймер-50.svg"
                                                            alt="иконка коммитов" /> {{ repository.commits.length }} commits</p>
                    </div>
                    <file-manager
                        :all-files="repository.files"
                        @editFile="file => loadFile(file)"
                        @selectFolder="selectFolder"
                        ref="manager"
                    />
                    <list-loader v-show="loadingFile" />
                </section>

                <div v-show="!loadingFile && selectedFile.length !== 0">
                    <file-editor
                        ref="editor"
                        save-sign="Commit changes"
                        @save="(data) => commitChanges(data.changed, data.message, data.content)"
                    />
                </div>
         </div>

        <bullet-list-loader v-else />
    </main>

</template>

<script>

import FileManager from "@/js_part/web/view/templates/files/FileManager.vue";
import {BulletListLoader, ListLoader} from "vue-content-loader";
import FileEditor from "@/js_part/web/view/templates/files/FileEditor.vue";
import RepositoryInfo from "@/js_part/web/view/templates/gitoad/repositories/RepositoryInfo.vue";
import LangsInfo from "@/js_part/web/view/pages/gitoad/LangsInfo.vue";
import store from "@/js_part/data/storages/storages";
import RepositorySettings from "@/js_part/web/view/templates/gitoad/repositories/settings.vue";

export default {
    name: "RepositoryPage",
    components: {RepositorySettings, LangsInfo, RepositoryInfo, FileEditor, BulletListLoader, ListLoader, FileManager},
    data() {
        return {
            repository: {},
            loadingFile: false,
            selectedFile: '',
            loadingRepo: false,
            store: store,
            changedBranch: false
        }
    },

    created() {
        this.getRepo()
    },
    methods: {
        loadFile(file) {
            if (this.file === file || file === null) {
                return
            }

            this.loadingFile = true
            return this.$gitoadMutations.gitoadSetPath(file)
                .then(() => this.$gitoad.files.getFile())
                .then(res => {
                    if (!res.ok) {
                        this.loadingFile = false
                        throw new Error()
                    }
                    return res.json()
                })
                .then(t => {
                    file = t['file']
                    this.$refs.editor.file = file
                })
                .then(() => {
                    this.loadingFile = false
                    this.selectedFile = file
                })
        },
        commitChanges(changed, message, content) {

            if(!changed)
                return
            this.$gitoad.commits.commit({
                repository: this.repository.owner + '/' + this.repository.name,
                branch: this.repository.currentBranch,
                path: this.selectedFile.filename,
                content: content,
                message: message
            }).then(res => {

                if(!res.ok) {
                    console.log('(((((');
                }
                return res.json()
            })
            .then(t => {
                if(t['successOperation'])
                    this.$forceUpdate
            })

        },
        getRepo() {

            const repo = store.getters.currentRepository
            if(repo !== null && repo !== undefined && !this.changedBranch) {
                this.repository = repo
                return
            }

            this.loadingRepo = true
            let name = this.$route.params.repo
            let body = {name: name}
            if(this.repository.currentBranch !== undefined && this.repository.currentBranch !== null)
                body.branch = this.repository.currentBranch
            this.$gitoad.repos.getRepo(body)
                .then(res => {

                    if (!res.ok) {
                        this.loadingRepo = false
                        return
                    }

                    return res.json()
                })
                .then(t => {
                    this.repository = t['repository']
                    this.$gitoadMutations.gitoadSetBranch(t['branch'])
                    this.$gitoadMutations.gitoadSetRepositoryName(this.repository.name)
                    this.$gitoadMutations.gitoadSetRepository(this.repository)
                    this.changedBranch = false
                }).then(() => this.loadingRepo = false)
        },
        selectFolder() {
            this.selectedFile = ''
        },
        changeCurrentBranch(branch) {
            this.repository.currentBranch = branch
            this.changedBranch = true
            this.getRepo()
        }
    }
}
</script>

<style scoped>
  @import "@/css_part/pages/repository.css";

</style>