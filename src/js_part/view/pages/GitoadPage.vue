<template>

    <gitoad-registration-form
        v-if="!store.getters.gitoadExist"
        @success="successRegistration"
        @referer="toMainPage"
    />

    <main class="git-home-page" v-else-if="store.getters.gitoadAuth">
        <div class="gitoad_content">

            <avatar-picture />
            <repositories-list />

        </div>
    </main>


    <custom-footer/>

</template>

<script>
import CustomFooter from "@/js_part/view/templates/CustomFooter.vue";
import GitoadRegistrationForm from "@/js_part/view/templates/forms/GitoadRegistrationForm.vue"
import RepositoriesList from "@/js_part/view/templates/gitoad/repositories/RepositoriesList.vue";
import store from "@/js_part/storage/storages";
import AvatarPicture from "@/js_part/view/templates/gitoad/GitoadAvatarPicture.vue";

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
            .then(res => res.json())
            .then(t => this.$gitoadMutations.gitoadSetAuth(t['successOperation']))
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
    },
    async created() {

        if (!store.getters.gitoadExist)
            await this.exists()
        if(!store.getters.gitoadAuth)
            await this.login()
    }
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";
  @import "@/css_part/pages/git-home-page.css";
  @import "@/css_part/blocks/git-home-page/content/content.css";

</style>