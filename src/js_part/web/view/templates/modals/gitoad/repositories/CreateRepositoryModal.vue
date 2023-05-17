<template>

  <modal-window @close="close">

      <create-repository-form />

  </modal-window>

</template>

<script>

import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";
import CreateRepositoryForm from "@/js_part/web/view/templates/forms/gitoad/repositories/CreateRepositoryForm.vue";

export default{
    name: "CreateRepositoryModal",
    methods: {
        close() {
            this.$emit('close')

        },
    },
    components: {CreateRepositoryForm, ModalWindow},
}
</script>


<style scoped>

</style>