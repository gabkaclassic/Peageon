
<template>

    <section class="content__repositories">

        <gitoad-repositories-search-bar />

        <ul class="table">
            <li class="table__cell" v-for="(repo, id) in this.repos" :key="id">

                <repository-view :repository="repo" />
            </li>
        </ul>

    </section>



</template>

<script>
import store from "@/storages/storages"
import GitoadRepositoriesSearchBar from "@/js_part/templates/searchBars/GitoadRepositoriesSearchBar.vue";
import RepositoryView from "@/js_part/templates/gitoad/repositories/RepositoryView.vue";
export default {
  name: "RepositoriesList",
    components: {RepositoryView, GitoadRepositoriesSearchBar},
  data() {
    return {
      store: store,
      repos: []
    }
  },
    methods: {
        async getRepos() {
            this.$gitoad.repos.getAllRepos()
                .then(res => res.json())
                .then(t => this.repos = t['repositories'])
        },
        fetchEventsList: function () {
            if(store.getters.gitoadExist)
                this.getRepos()
        },
    },
    created() {

      this.fetchEventsList()
       setInterval(this.fetchEventsList, 60000)
    }
}
</script>

<style scoped>

    @import "@/css_part/pages/git-home-page.css";

</style>