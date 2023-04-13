<template>

  <div class = "modal-window">

      <file-manager
              v-if="!loading"
              :all-files="repository.files"
      />
      <list-loader v-else />
  </div>

</template>

<script>

import FileManager from "@/js_part/view/templates/FileManager.vue";
import {ListLoader} from "vue-content-loader";

export default {
    name: "RepositoryPage",
    components: {ListLoader, FileManager},
    data() {
        return {
            repository: {},
            loading: true
        }
    },
    beforeMount() {
        let name = this.$route.params.repo
        this.$gitoad.repos.getRepo({name: name})
            .then(res => res.json())
            .then(t => {
                this.repository = t['repository']
                this.$gitoadMutations.gitoadSetBranch(t['branch'])
                this.$gitoadMutations.gitoadSetRepository(this.repository.name)
            }).then(() => this.loading = false)
    },
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";

</style>