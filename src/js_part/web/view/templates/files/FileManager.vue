<template>

    <div class="grid-files" v-show="!fileReaderMode">
        <div v-if="currentDirectory.length > 0" @click="goBack" class="grid-files__line-item">
            ...
        </div>
        <div v-for="dir in directories" :key="dir">
            <div @click="changeCurrentDirectory(dir)" class="grid-files__line-item">
                <a class="grid-files__item-title" href="#">
                    <img class="grid-files__item-icon" src="@/css_part/images/icons8-папка-50.svg" alt="иконка файла\папки">{{ dir }}
                </a>
            </div>
        </div>

        <div v-for="file in files" :key="file" class="grid-files__line-item">
            <div @click="editFile(file)">
                <a class="grid-files__item-title" href="#">
                    <img class="grid-files__item-icon" src="@/css_part/images/icons8-файл-24.svg" alt="иконка файла\папки">{{ file }}
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import {frogSay} from "@/js_part/utils/functions/frogSay"
export default {
    name: "FileManager",
    data() {
        return {
            files: [],
            directories: [],
            currentDirectory: '',
            fileReaderMode: false,
            fileLoad: false,
        }
    },
    props: {
        allFiles: {
            required: true,
            type: Array
        }
    },
    created() {
        this.$gitoadMutations.gitoadClearFile()
        this.parsingData()
    },
    methods: {
        changeCurrentDirectory(dir) {
            this.currentDirectory += dir + '/'
            this.parsingData()
            this.closeFile()
            this.$emit('selectFolder')
        },
        frogSay() {
          return frogSay('This repositories is still empty')
        },
        goBack() {
            this.$emit('selectFolder')
            this.currentDirectory = this.currentDirectory.substring(0, this.currentDirectory.length-1)
            this.currentDirectory = this.currentDirectory.substring(0, this.currentDirectory.lastIndexOf('/')+1);
            this.parsingData()
            this.closeFile()

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
        closeFile() {
            this.fileReaderMode = false
        },
        editFile(file) {

            let path = this.allFiles
                .map(f => f.name)
                .filter(p => p.includes(file))
                .at(0)

            this.$emit('editFile', path)
        },
        search(filename) {

          this.currentDirectory = ''

          if(!filename.length) {
            this.$gitoadMutations.gitoadClearFile()
            this.parsingData()
          }

          filename = filename.toLowerCase()
          this.directories = []
          this.files = this.allFiles
              .map(f => f.name)
              .map(f => f.substring(f.lastIndexOf("/")))
              .filter(f => f.toLowerCase().includes(filename))

        },
    },
}
</script>

<style scoped>
    @import "@/css_part/pages/repository.css";
</style>
