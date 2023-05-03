<template>

    <main class="repository">

         <div class="content" v-if="!loadingRepo">

            <repository-info
                :current-branch="repository.currentBranch"
                :branches="repository.branches"
            />

             <langs-info :languages="repository.languages"/>


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

export default {
    name: "RepositoryPage",
    components: {LangsInfo, RepositoryInfo, FileEditor, BulletListLoader, ListLoader, FileManager},
    data() {
        return {
            repository: {},
            loadingFile: false,
            selectedFile: '',
            loadingRepo: false,
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
            this.loadingRepo = true
            let name = this.$route.params.repo
            this.$gitoad.repos.getRepo({name: name})
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
                    this.$gitoadMutations.gitoadSetRepository(this.repository.name)
                }).then(() => this.loadingRepo = false)
        },
        selectFolder() {
            this.selectedFile = ''
        },
    }
}
</script>