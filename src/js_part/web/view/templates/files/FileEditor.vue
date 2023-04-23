<template>
    <section class="block-readme">
        <div class="block-readme__line">

            <div class="block-readme__block">
                <p class="block-readme__title">
                    {{ file.filename }}  {{ fileEditorMode }}
                </p>
                <a class="block-readme__link-edit" @click="changeFileEditorMode"><img class="block-readme__icon-edit" src="@/css_part/images/icons8-карандаш-24.svg" alt="иконка для редактирования"></a>
                <div class="block-readme__dropblock">
                    <button class="block-readme__btn" @click="saveFile"><img class="block-readme__icon" src="@/css_part/images/Menu_icon_2_icon-icons.com_71856.svg" alt="иконка readme"> {{ saveSign }} </button>
                </div>
            </div>
        </div>
        <div class="block-readme__main-block">
            <code-editor
                ref = "reader"
                :value="file.content"
                :copy_code="true"
                :display_language="false"
                :wrap_code="false"
                :read_only="true"
                v-show="!fileEditorMode"
                class="dark"
                width="100%"
                border_radius="4px"
                font_size="14px"
            />
            <code-editor
                ref = "editor"
                :value="file.content"
                :copy_code="false"
                :display_language="false"
                :wrap_code="false"
                :read_only="false"
                v-show="fileEditorMode"
                :hide_header="true"
                class="dark"
                width="100%"
                border_radius="4px"
                font_size="14px"
            />
            <code-loader v-show="fileLoad"/>
        </div>
    </section>

</template>

<script>
import CodeEditor from "simple-code-editor";
import {CodeLoader} from "vue-content-loader";

export default {
    name: "FileEditor",
    components: {CodeLoader, CodeEditor},
    data() {
        return {
            fileEditorMode: false,
            fileLoad: false,
            file: {},
            source: null
        }
    },
    props: {
        saveSign: {
            type: String,
            default: 'Save'
        }
    },
    methods: {
        changeFileEditorMode() {

            this.saveValue()

            this.fileEditorMode = !this.fileEditorMode
        },
        saveValue() {

            let editor = (this.fileEditorMode) ? this.$refs.editor : this.$refs.reader

            if(this.source === null && this.file.content !== editor.contentValue) {

                this.source = editor.contentValue
                return
            }
            this.file.content = editor.contentValue
        },
        saveFile() {
            this.saveValue()
            let message = '?'
            let changed = this.source === this.file.content
            this.$emit('save', {changed: changed, message: message, content: this.file.content})
        },
    }
}
</script>

<style scoped>
    @import "@/css_part/pages/repository.css";
</style>