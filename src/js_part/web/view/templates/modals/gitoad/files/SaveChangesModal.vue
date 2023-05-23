
<template>

  <modal-window @close="close">

      <save-changes-form @save="msg => save(msg)"/>

  </modal-window>

</template>

<script>



import {defineComponent} from "vue";
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";
import SaveChangesForm from "@/js_part/web/view/templates/forms/gitoad/files/SaveChangesForm.vue";

export default defineComponent({
    components: {SaveChangesForm, ModalWindow},
    methods: {
        save(message){
            this.$emit('save', message)
        },
        close() {
            this.$modalMutations.gitoadCloseMessageModal()
        },
    },
})
</script>

<style scoped>

</style>