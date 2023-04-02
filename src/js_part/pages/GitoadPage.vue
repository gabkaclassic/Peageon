<template>

  <custom-header />

  <div class="modal-window">
    <gitoad-registration-form
        v-if="!store.getters.gitoadExist"
        @success="successRegistration"
        @referer="toMainPage"
    />
    <repositories-list
        v-else-if="store.getters.gitoadAuth"
        :repositories="repos"
    />
  </div>



  <custom-footer/>

</template>

<script>
import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";
import GitoadRegistrationForm from "@/js_part/templates/forms/GitoadRegistrationForm.vue"
import RepositoriesList from "@/js_part/templates/gitoad/RepositoriesList.vue";
import store from "@/storages/storages";

export default {
  name: "GitoadPage",
  components: {RepositoriesList, GitoadRegistrationForm, CustomFooter, CustomHeader},
  data() {
    return {
      store: store,
      repos: [],
    }
  },
  methods: {

    successRegistration() {
      this.$gitoadMutations.gitoadExist()
    },
    login() {
        this.$gitoad.auth.login()
            .then(res => res.json()).then(t => this.$gitoadMutations.gitoadSetAuth(t['successOperation']))
    },
    exists() {
      this.$gitoad.auth.exists()
          .then(res => res.json()).then(t => this.$gitoadMutations.gitoadSetExist(t['successOperation']))
    },
    toMainPage() {
      this.$changeMainPageMode.main()
      this.$changeGlobalMode.globalMain()
    },
    getRepos() {
      this.$gitoad.repos.getAllRepos().then(res => res.json()).then(t => this.repos = t['repositories'])
    },
    fetchEventsList: function () {
      this.getRepos()
    }
  },
  beforeMount() {
    this.exists()
    if(!store.getters.gitoadExist)
      this.login()
  },
  created () {

    this.exists()
    if(store.getters.gitoadExist)
      this.login()
    this.fetchEventsList()
    setInterval(this.fetchEventsList, 60000)
  },
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";

</style>