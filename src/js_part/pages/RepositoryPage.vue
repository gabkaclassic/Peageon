<template>

  <div class = "modal-window">

      {{ decode(repository.readme.content) }}
  </div>

</template>

<script>

import {decode} from "@/plugins/utils/base43Utils";

export default {
    name: "RepositoryPage",
    methods: {decode},
    data() {
        return {
            repository: {}

        }
    },
    beforeMount() {
        let name = this.$route.params.repo
        this.$gitoad.repos.getRepo({name: name})
            .then(res => res.json())
            .then(t => this.repository = t['repository'])
    }
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";

</style>