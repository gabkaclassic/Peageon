<template>

  <body class="page">

  <authorized-check>
    <template v-slot:authorized>
      <div class="content" v-show="store.getters.main">
        <p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p>
      </div>
    </template>
    <template
        v-slot:unauthorized
    >
      <div v-show="!store.getters.main">

        <login-form
            v-show="store.getters.loginMode"
            @referer="registration"
            @success="main"
        />
        <registration-form
            v-show="store.getters.registrationMode"
            @referer="login"
            @success="main"
        />
      </div>
    </template>

  </authorized-check>



  <custom-footer/>
  </body>

</template>

<script>
import CustomFooter from "@/js_part/view/templates/CustomFooter.vue";
import AuthorizedCheck from "@/js_part/view/templates/AuthorizedCheck.vue";
import LoginForm from "@/js_part/view/templates/forms/AuthoadizationLoginForm.vue";
import RegistrationForm from "@/js_part/view/templates/forms/AuthoadizationRegistrationForm.vue";
import store from "@/js_part/storage/storages";
export default {
    name: "MainPage",
    components: {
      RegistrationForm,
      LoginForm,
      AuthorizedCheck,
      CustomFooter,

    },
  data() {
    return {
      store: store,
    }
  },
  methods: {
    login() {
      this.$changeMainPageMode.login()
    },
    main() {
      this.$changeMainPageMode.main()
    },
    registration() {
      this.$changeMainPageMode.registration()
    },
    logout() {
      this.$changeMainPageMode.logout()
    },
  },
}

</script>

<style>

  @import "@/css_part/pages/home-page.css";
  @import "@/css_part/blocks/modal-window/modal-window.css";
  @import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
