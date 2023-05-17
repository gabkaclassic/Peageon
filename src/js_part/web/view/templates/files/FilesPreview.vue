<template>
    <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
            <div>
                <p>
                    {{ file.name }}
                </p>
            </div>
            <div>
                <button
                        class="ml-2"
                        type="button"
                        @click="remove"
                        title="Remove file"
                >
                    <b>×</b>
                </button>
            </div>
        </div>
    </div>
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