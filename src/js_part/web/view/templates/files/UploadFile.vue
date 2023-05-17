<template>
    <div class="popup-upload__block-drag" id="file-drag-drop">

        <img class="popup-upload__block-drag-icon"  src="@/css_part/images/icons8-файл-24.svg">
        <h2 class="popup-upload__block-drag-title">Drag files to add them to your repository</h2>

        <input
                type="file"
                multiple
                name="file"
                id="fileInput"
                class="hidden-input"
                ref="file"
                accept="*/*"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="drop"
                @change="onChange"
            />
    </div>
    <files-preview :files="files" @remove="ind => remove(ind)" />
</template>

<script>
import FilesPreview from "@/js_part/web/view/templates/files/FilesPreview.vue";

export default {
    name: "DropZone",
    components: {FilesPreview},
    data() {
        return {
            isDragging: false,
            files: [],
        };
    },
    methods: {
        onChange() {
            console.log(this.$refs.file.files[0]);
            this.files = [...this.$refs.file.files];
        },
        dragover(e) {
            e.preventDefault();
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(e) {
            e.preventDefault();
            this.$refs.file.files = e.dataTransfer.files;

            this.onChange();
            this.isDragging = false;
        },
        remove(i) {
            this.files.splice(i, 1);
        },
    },
};
</script>

<style>
    @import "@/css_part/blocks/popup-upload/popup-upload.css";
</style>
