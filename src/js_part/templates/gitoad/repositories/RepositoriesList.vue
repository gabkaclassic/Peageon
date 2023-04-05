
<template>

    <list-loader v-if="loading"/>

    <section class="content__repositories" v-else>

            <gitoad-repositories-search-bar
                @sortByName="sortByName"
                @sortByDate="sortByDate"
                @filterByPublic="filterByVisibility(false)"
                @filterByPrivate="filterByVisibility(true)"
                @filterByFork="filterByFork"
                @filterByArchived="filterByArchived"
                @filterByTemplate="filterByTemplate"
                @all="emptyFilter"
                @filterByLanguage="(language) => filterByLanguage(language)"
                @searchByName="(name) => search(name)"
            />

            <ul class="table">
                <li class="table__cell" v-for="(repo, id) in this.actualRepos" :key="id">

                    <repository-view :repository="repo" />
                </li>
            </ul>
    </section>



</template>

<script>
import store from "@/storages/storages"
import GitoadRepositoriesSearchBar from "@/js_part/templates/searchBars/GitoadRepositoriesSearchBar.vue";
import RepositoryView from "@/js_part/templates/gitoad/repositories/RepositoryView.vue";
import {ListLoader} from "vue-content-loader";
export default {
  name: "RepositoriesList",
    components: {ListLoader, RepositoryView, GitoadRepositoriesSearchBar},
  data() {
    return {
      store: store,
      repos: [],
        actualRepos: [],
      loading: true
    }
  },
    methods: {
      sortByName() {

          this.actualRepos.sort(compareByName)
      },
        sortByDate() {

            this.actualRepos.sort(compareByDate)
        },
        filterByVisibility(visibility) {
            this.actualRepos = this.repos.slice()
            this.actualRepos = this.actualRepos.filter((repo) => repo.isPrivate === visibility)
        },
        filterByFork() {
            this.actualRepos = this.repos.slice()
            this.actualRepos = this.actualRepos.filter((repo) => repo.isFork)
        },
        filterByArchived() {
            this.actualRepos = this.repos.slice()
            this.actualRepos = this.actualRepos.filter((repo) => repo.isAtchived)
        },
        filterByTemplate() {
            this.actualRepos = this.repos.slice()
            this.actualRepos = this.actualRepos.filter((repo) => repo.isTemplate)
        },
        emptyFilter() {
            this.actualRepos = this.repos.slice()
        },
        search(name) {
            if(name === null || name.length === 0) {
                this.actualRepos = this.repos
                return
            }

            this.actualRepos = this.actualRepos.filter((repo) => repo.name.includes(name))
        },
        filterByLanguage(language) {

            this.actualRepos = this.repos.slice()

            if(language === 'All')
                return

            this.actualRepos = this.actualRepos.filter((repo) => repo.language === language)
        },
        async getRepos() {
            this.$gitoad.repos.getAllRepos()
                .then(res => res.json())
                .then(t => {
                    this.repos = t['repositories']
                    if(this.actualRepos.length === 0)
                        this.actualRepos = this.repos.slice()
                })
                .then(() => this.loading = false)
        },
        fetchEventsList: async function () {

            if(store.getters.gitoadExist) {
                await this.getRepos()
            }
        },
    },
    created() {

      this.fetchEventsList()
       setInterval(this.fetchEventsList, 60000)
    }
}

function compareByName(a, b) {
    if (a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    return 0;
}

function compareByDate(a, b) {
    if ( a.lastUpdate < b.lastUpdate){
        return -1;
    }
    if (a.lastUpdate > b.lastUpdate){
        return 1;
    }
    return 0;
}

</script>

<style scoped>

    @import "@/css_part/pages/git-home-page.css";

</style>