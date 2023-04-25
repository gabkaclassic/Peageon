<template>

  <body class="page">

      <div class="content" v-show="store.getters.main">
        <p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p>
      </div>

      <custom-footer/>

      <authoadization-login-modal
              v-show="store.getters.loginMode"
      />
      <authoadization-registration-modal
              v-show="false"
      />
      <!--              v-show="store.getters.registrationMode"-->
  </body>

</template>

<script>
import CustomFooter from "@/js_part/web/view/templates/CustomFooter.vue";
import store from "@/js_part/data/storage/storages";
import AuthoadizationRegistrationModal from "@/js_part/web/view/templates/modals/authoadization/AuthoadizationRegistrationModal.vue";
import AuthoadizationLoginModal from "@/js_part/web/view/templates/modals/authoadization/AuthoadizationLoginModal.vue";
export default {
    name: "MainPage",
    components: {
        AuthoadizationLoginModal,
        AuthoadizationRegistrationModal,
      CustomFooter,

    },
  data() {
    return {
      store: store,
    }
  },
  methods: {
    logout() {
      this.$changeMainPageMode.logout()
    },
  },
}

</script>

<style>

  @import "@/css_part/pages/home-page.css";
  @import "@/css_part/blocks/modal-window/modal-window.css";

</style>
