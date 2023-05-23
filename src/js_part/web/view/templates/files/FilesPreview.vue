<template>

    <p class="popup-upload__screen" v-for="file in files" :key="file.name">
        <img src="@/css_part/images/icons8-файл-24.svg" style="height: 15px;">
        <span class="popup-upload__span" style="font-size: 14px; margin: auto 0"> {{ file.name }} </span>
        <button
                class="ml-2"
                type="button"
                @click="remove"
                title="Remove file"
        >
            <img src="@/css_part/images/free-icon-close-151882.svg" style="height: 8px; margin-left: 70%">
        </button>
    </p>
</template>
<script>
export default {
    name: 'files-preview',
    data() {
        return {
        }
    },
    props: {
        files: {
            required: true,
            type: Array,
        }
    },
    methods: {
        remove(i) {
            this.$emit('remove', i)
        },
    }
}
</script>

<style>
@import "@/css_part/pages/popup-upload.css";
</style>