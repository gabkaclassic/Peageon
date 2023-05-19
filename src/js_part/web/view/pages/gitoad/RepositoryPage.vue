<template>

  <div>
    <repository-view v-show="store.getters.gitoadRepoMode" />
    <commits-view v-show="store.getters.gitoadCommitsMode" />
  </div>

</template>

<script>

import store from "@/js_part/data/storages/storages"
import RepositoryView from "@/js_part/web/view/templates/gitoad/repositories/RepositoryView.vue";
import CommitsView from "@/js_part/web/view/templates/gitoad/commits/CommitsView.vue";

export default {
  name: "RepositoryPage",
  components: {CommitsView, RepositoryView},
  data() {
    return {
      store: store,
    }
  },
  created() {
  },
  methods: {
  },
}

</script>


<style scoped>
  @import "@/css_part/pages/commits.css";
</style>