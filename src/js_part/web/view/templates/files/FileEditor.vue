<template>
    <section class="block-readme">
        <div class="block-readme__line">

            <div class="block-readme__block">
                <div class="block-readme__dropblock">
                    <button class="block-readme__btn"><img class="block-readme__icon" src="@/css_part/images/Menu_icon_2_icon-icons.com_71856.svg" alt="иконка readme"></button>
                </div>
                <p class="block-readme__title">
                    {{ file.filename }}
                </p>
                <a class="block-readme__link-edit" @click="changeFileEditorMode"><img class="block-readme__icon-edit" src="@/css_part/images/icons8-карандаш-24.svg" alt="иконка для редактирования"></a>

            </div>
        </div>
        <div class="block-readme__main-block">
            <code-editor
                    :value="file.content"
                    :display_language="false"
                    :wrap_code="true"
                    font_size="14px"
                    border_radius="4px"
                    class="github_dark"
                    :read_only="fileEditorMode"
                    :autofocus="true"
                    z_index=0
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
            file: {}
        }
    },
    methods: {
        changeFileEditorMode() {
            this.fileEditorMode = !this.fileEditorMode
        },
    }
}
</script>

<style scoped>
    @import "@/css_part/pages/repository.css";
</style>