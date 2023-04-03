<link rel="stylesheet" href="../../../../css_part/pages/git-home-page.css">
<template>

    <div class="content__repositories">

        <div class="table">
            <div class="table__cell" v-for="(repo, id) in repositories"
                 :key="id">
                {{ repo }}
            </div>
        </div>

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