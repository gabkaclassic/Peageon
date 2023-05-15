<template>
    <section class="block-readme">
        <div class="block-readme__line">

            <div class="block-readme__block">
                <p class="block-readme__title">
                    {{ file.filename }}
                </p>
                <a class="block-readme__link-edit" @click="changeFileEditorMode">
                    <img v-if="fileEditorMode" class="block-readme__icon-edit_fixed" src="@/css_part/images/svg-edited.svg" alt="иконка для редактирования">
                    <img v-else class="block-readme__icon-edit" src="@/css_part/images/icons8-карандаш-24.svg" alt="иконка для редактирования">
                </a>
                <div class="block-readme__dropblock">
                    <button class="block-btns__item" @click="enterMessage"> {{ saveSign }} </button>
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
                :hide_header="true"
                class="dark"
                width="100%"
                border_radius="4px"
                font_size="14px"
            />
            <code-editor
                ref = "editor"
                :value="file.content"
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


    <save-changes-modal v-if="store.getters.messageModal" @save="mes => saveFile(mes)"/>


</template>

<script>
import CodeEditor from "simple-code-editor";
import {CodeLoader} from "vue-content-loader";
import store from "@/js_part/data/storages/storages";
import SaveChangesModal from "@/js_part/web/view/templates/modals/gitoad/SaveChangesModal.vue";
export default {
    name: "FileEditor",
    components: {SaveChangesModal, CodeLoader, CodeEditor},
    data() {
        return {
            fileEditorMode: false,
            fileLoad: false,
            source: null,
            file: store.getters.currentFile,
            messageModal: false,
            store: store,
        }
    },
    props: {
        saveSign: {
            type: String,
            default: 'Save'
        },
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
        saveFile(message) {

            this.saveValue()
            let changed = this.source === this.file.content
            this.$emit('save', {changed: changed, message: message, content: this.file.content})
            this.$gitoadMutations.gitoadCloseMessageModal()
        },
        enterMessage() {
            this.$gitoadMutations.gitoadOpenMessageModal()
        },
    }
}
</script>

<style scoped>
    @import "@/css_part/pages/repository.css";
    .block-readme__icon-edit_fixed{
        transform: scale(120%);
    }
</style>