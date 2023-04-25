<template>

  <modal-window>

      <login-form
              @referer="registration"
              @success="main"
      />

  </modal-window>

</template>

<script>
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";
import LoginForm from "@/js_part/web/view/templates/forms/authoadization/AuthoadizationLoginForm.vue";

export default {
    name: "AuthoadizationLoginModal",
    components: {LoginForm, ModalWindow},
    methods: {
        registration() {
            this.$changeMainPageMode.registration()
        },
        main() {
            this.$changeMainPageMode.main()
        },
    }
}
</script>

<style scoped>

</style>