
<template>
    <modal-window @close="close">
      <div class="popup__container popup-upload__container">

        <upload-file ref="uploadZone"/>
        <add-file-form @upload="(path, description) => createCommit(path, description)"/>
      </div>
    </modal-window>
</template>

<script>

import UploadFile from "@/js_part/web/view/templates/files/UploadFile.vue";
import AddFileForm from "@/js_part/web/view/templates/forms/gitoad/files/AddFileForm.vue";
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";
import store from "@/js_part/data/storages/storages";

export default {
    name: 'AddFileModal',
    // eslint-disable-next-line vue/no-unused-components
    components: {AddFileForm, ModalWindow, UploadFile},
    methods: {
      close() {
          this.$modalMutations.gitoadCloseUploadModal()
      },
      async createCommit(path, description) {
        let upload = this.$refs.uploadZone.files[0]
        let file = {
          path: path.length ? path + '/' + upload.name : upload.name,
        }
        let gitoad = this.$gitoad
        let reader = new FileReader()
          reader.onloadend = function (e) {
            file.content = e.target.result

            gitoad.commits.commit({
              file: file,
              fileInfo: {
                repository: store.getters.currentRepository.name,
                branch: store.getters.gitoadBranch,
                path: path,
                message: description,
              }
            })
                .then(res => res.json())
                .then(res => {

                  let success = res.successOperation

                  if (!res.ok || !success)
                    return

                  // this.close()
                  // this.$forceUpdate
                })
          };
          reader.readAsBinaryString(upload);
      },
    },
}

</script>

<style scoped>

  @import "@/css_part/pages/popup-upload.css";

</style>