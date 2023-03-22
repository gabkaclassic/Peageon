<template>

  <body class="page">

  <custom-header
      @loginModal="changeMode(modes.login)"
      @registrationModal="changeMode(modes.registry)"
      @logoutModal="changeMode(modes.logout)"
  />

    <main>
      <div class="content"><p v-show="mode === modes.main" class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p></div>
    </main>

  <div class="modal-window"
    v-show="mode !== modes.main">

    <login-form
        v-show="mode === modes.login"
        @referer="changeMode(modes.registry)"
        @success="successOperation"
    />
    <registration-form
        v-show="mode === modes.registry"
        @referer="changeMode(modes.login)"
        @success="successOperation"
    />
  </div>

  <custom-footer/>
  </body>

</template>

<script>
import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import LoginForm from "@/js_part/templates/forms/LoginForm.vue";
import RegistrationForm from "@/js_part/templates/forms/RegistrationForm.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";

export default {
    name: "MainPage",
    components: {
      CustomFooter,
      RegistrationForm,
      LoginForm,
      CustomHeader

    },
    data() {
      return {
        mode: 'MAIN'
      }
    },
    computed: {
      modes() {
        return {
          main: 'MAIN',
          login: 'LOGIN',
          registry: 'REGISTRATION',
          logout: 'LOGOUT',
        }
      }
    },
    methods: {
      changeMode(mode) {
        this.mode = mode
      },
      successOperation() {

        this.changeMode(this.modes.main)
      }
    }
  }

</script>

<style>

  @import "@/css_part/pages/home-page.css";

  .modal-window{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    /*------------------------------------ */
    
        /*------------------------------------ */
  }


</style>
