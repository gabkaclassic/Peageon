<template>

    <div v-if="currentDirectory.length > 0" @click="goBack">
        ...
    </div>
  <div v-for="dir in directories" :key="dir">
      <div @click="changeCurrentDirectory(dir)">
          {{ dir }}
      </div>
  </div>

    <div v-for="file in files" :key="file">
        <div @click="fileEditor(file)">
            {{ file }}
        </div>
    </div>

  <code-editor
          v-if="fileEditorMode && !fileLoad"
          :value="currentFile.content"
          :display_language="true"
          :wrap_code="true"
          font_size="14px"
          border_radius="4px"
          class="github_dark"

  />
  <code-loader v-else-if="fileEditorMode && fileLoad"/>

</template>

<script>
import CodeEditor from 'simple-code-editor';
import {CodeLoader} from "vue-content-loader";

export default {
    name: "FileManager",
    components: {CodeLoader, CodeEditor},
    data() {
        return {
            files: [],
            directories: [],
            currentDirectory: '',
            currentFile: {},
            fileEditorMode: false,
            fileLoad: false
        }
    },
    props: {
        allFiles: {
            required: true,
            type: Array
        }
    },
    computed: {

    },
    created() {
        this.parsingData()
    },
    methods: {
        changeCurrentDirectory(dir) {
            this.currentDirectory += dir + '/'
            this.parsingData()
        },
        goBack() {
            this.currentDirectory = this.currentDirectory.substring(0, this.currentDirectory.lastIndexOf('/')).trim()
            this.parsingData()
            console.log(this.currentDirectory);
        },
        fileEditor(file) {
            this.fileLoad = true
            this.fileEditorMode = true
            this.$gitoadMutations.gitoadSetPath(this.allFiles.filter(path => path.name.includes(file)).at(0).name)
            this.$gitoad.files.getFile()
                .then(res => {
                    if(!res.ok) {
                        this.fileLoad = false
                        this.fileEditorMode = false
                        throw new Error()
                    }
                    return res
                })
                .then(res => res.json())
                .then(t => {
                    this.currentFile = t['file']
                    this.fileLoad = false
                })
        },
        parseFiles() {
            this.files = [...new Set(
                this.allFiles
                    .map(paths => paths.name)
                    .filter(path => path.includes(this.currentDirectory))
                    .map(f => f.substring(this.currentDirectory.length))
                    .map(f => (f.includes('/')) ? f.substring(0, f.indexOf('/')) : f)
                    .filter(f => f.includes('.'))
                    .filter(f => !this.directories.includes(f))
                    .sort()
            )]
        },
        parseDirectories() {
            this.directories = [...new Set(
                this.allFiles
                    .map(paths => paths.name)
                    .filter(f => f.includes('/'))
                    .filter(path => path.includes(this.currentDirectory))
                    .map(f => f.substring(this.currentDirectory.length))
                    .filter(f => f.includes('/'))
                    .map(f => (f.includes('/')) ? f.substring(0, f.indexOf('/')) : f)
                    .sort()
            )]
        },
        parsingData: function() {
            this.parseDirectories()
            this.parseFiles()
        },

    }
}
</script>

<style scoped>

</style>