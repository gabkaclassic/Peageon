<template>
    <list-loader v-if="loading" />
    <main class="git-home-page" v-if="store.getters.gitoadAuth">
        <div class="gitoad_content">

            <avatar-picture
                @unauthorized="login"
                :exists="store.getters.gitoadExist"
            />
            <repositories-list
                :exists="store.getters.gitoadExist"
                @unauthorized="login"
            />

        </div>
    </main>

    <custom-footer/>

    <gitoad-registration-modal
        v-if="!store.getters.gitoadExist && !loading"
    />

</template>

<script>
import CustomFooter from "@/js_part/web/view/templates/CustomFooter.vue";
import RepositoriesList from "@/js_part/web/view/templates/gitoad/repositories/RepositoriesList.vue";
import store from "@/js_part/data/storages/storages";
import AvatarPicture from "@/js_part/web/view/templates/gitoad/account/GitoadAvatarPicture.vue";
import {ListLoader} from "vue-content-loader";
import router from "@/js_part/web/routing/router";
import GitoadRegistrationModal from "@/js_part/web/view/templates/modals/gitoad/auth/GitoadRegistrationModal.vue";

export default {
  name: "GitoadPage",
  components: {
      GitoadRegistrationModal,
      ListLoader, AvatarPicture, RepositoriesList, CustomFooter},
  data() {
    return {
      store: store,
      repos: [],
      loading: false
    }
  },
  methods: {
    async login() {

        this.loading = true

        this.$gitoad.auth.login()
            .then(res => {

                let header = res.headers['Expired']

                if(!res.ok && header !== undefined) {
                    this.$authoadizationMutations.authoadizationLogout()
                    this.$changeMainPageMode.login()
                    router.push({path: '/home'})
                }

                this.loading = false

                return res.json()
            })
            .then(t => {
                this.$gitoadMutations.gitoadSetAuth(t['successOperation'])
                this.$gitoadMutations.gitoadSetExist(t['successOperation'])
            })
        },
        async exists() {
          this.$gitoad.auth.exists()
              .then(res => {
                if(!res.ok) {
                    if(res.status === 401)
                        this.login()
                    return
                }
                return res.json()
              }).then(t => this.$gitoadMutations.gitoadSetExist(t['successOperation']))
        },

    },
    async created() {

      await this.$gitoadMutations.gitoadRemoveRepository()

        if (!store.getters.gitoadExist)
            await this.exists()
        if(!store.getters.gitoadAuth) {
            await this.login()
        }
        if(!store.getters.authenticated)
            await this.$authoadization.auth()

        setInterval(this.login, 360000)
    }
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";
  @import "@/css_part/pages/git-home-page.css";
  @import "@/css_part/blocks/git-home-page/content/content.css";

</style>