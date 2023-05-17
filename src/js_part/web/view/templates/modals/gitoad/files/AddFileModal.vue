
<template>
    <modal-window>
      <div class="popup__container popup-upload__container">

        <upload-file />
        <add-file-form />
      </div>
    </modal-window>
</template>

<script>

import UploadFile from "@/js_part/web/view/templates/files/UploadFile.vue";
import AddFileForm from "@/js_part/web/view/templates/forms/gitoad/files/AddFileForm.vue";
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";

export default {
    name: 'AddFileModal',
    // eslint-disable-next-line vue/no-unused-components
    components: {AddFileForm, ModalWindow, UploadFile},
}

</script>

<style scoped>

  @import "@/css_part/pages/popup-upload.css";

</style>