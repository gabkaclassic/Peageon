<template>

  <div v-for="(repo, id) in repositories"
       :key="id">

    {{ repo }}
  </div>

</template>

<script>
// import RepositoryView from "@/js_part/templates/gitoad/RepositoryView.vue";
import store from "@/storages/storages"
export default {
  name: "RepositoriesList",
  // components: {RepositoryView},
  data() {
    return {
      store: store
    }
  },
  props: {
    repositories: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>