<template>

    <gitoad-registration-form
        v-if="!store.getters.gitoadExist"
        @success="successRegistration"
        @referer="toMainPage"
    />
    <div v-else-if="store.getters.gitoadAuth">

        <main class="git-home-page">
<!--            <track-bar />-->
            <div class="content">

                <avatar-picture login="" />
                <repositories-list :repositories="repos"/>
                <div class="content__menu"></div>

            </div>
            <repositories-list/>
        </main>
    </div>


    <custom-footer/>

</template>

<script>
import CustomFooter from "@/js_part/templates/CustomFooter.vue";
import GitoadRegistrationForm from "@/js_part/templates/forms/GitoadRegistrationForm.vue"
import RepositoriesList from "@/js_part/templates/gitoad/repositories/RepositoriesList.vue";
import store from "@/storages/storages";
import AvatarPicture from "@/js_part/templates/AvatarPicture.vue";
import trackElements from "@/js_part/templates/trackBar/elelments/TrackElements";

export default {
  name: "GitoadPage",
  components: {AvatarPicture, RepositoriesList, GitoadRegistrationForm, CustomFooter},
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
    async login() {
        this.$gitoad.auth.login()
            .then(res => res.json()).then(t => this.$gitoadMutations.gitoadSetAuth(t['successOperation']))
    },
    async exists() {
      this.$gitoad.auth.exists()
          .then(res => {
            if(res.ok)
              return res.json()
            return this.$gitoad.auth.exists().then(res => res.json())
          }).then(t => this.$gitoadMutations.gitoadSetExist(t['successOperation']))
    },
    toMainPage() {
      this.$changeMainPageMode.main()
    },
    async getRepos() {
      this.$gitoad.repos.getAllRepos().then(res => res.json()).then(t => this.repos = t['repositories'])
    },
    fetchEventsList: function () {
      this.getRepos()
    },
  },
  created () {
    this.exists().then(() => {
      if(!store.getters.gitoadExist)
        this.login()
    }).then(() => this.fetchEventsList())

    setInterval(this.fetchEventsList, 60000)
  },
  beforeMount() {
    this.$trackMutations.addToTrack(trackElements.elements.gitoad)
  }
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";
  @import "@/css_part/pages/git-home-page.css";

</style>