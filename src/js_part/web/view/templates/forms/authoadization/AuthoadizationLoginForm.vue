<template>

  <AbstractForm
      :method="properties.method"
      :sign-header="properties.signHeader"
      :sign-button="properties.signButton"
      :link="properties.link"
      :signLink="properties.signLink"
      @referer="referer"
      @submit.prevent="signIn"
  >
    <div class="input-form">
      <input
          type="text"
          v-model.trim="form.login"
          placeholder="Login"
          :class= "`input-form__login ${v$.form.login.$dirty && v$.form.login.$error ? 'input-form_station_error' : ''}`"
          name="login"
      >
      <forms-errors
          v-show="v$.form.login.$dirty && v$.form.login.$error"
          :errors="v$.form.login.$errors"
      />
    </div>
    <div class="input-form">
      <input
          type="password"
          v-model.trim=form.password
          placeholder="Password"
          :class= "`input-form__password ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
          name="password">
      <forms-errors
          v-show="v$.form.password.$dirty && v$.form.password.$error"
          :errors="v$.form.password.$errors"
      />
    </div>
    <forms-violations
        v-show="!violations.empty"
        :violations="violations"
    />
  </AbstractForm>

</template>

<script>
import AbstractForm from "@/js_part/web/view/templates/forms/AbstractForm.vue";
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import FormsViolations from "@/js_part/web/view/templates/forms/errors/FormsViolations.vue";
import FormsErrors from "@/js_part/web/view/templates/forms/errors/FormsErrors.vue";

export default {
  name: "LoginForm",
  components: {FormsErrors, FormsViolations, AbstractForm},
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      properties: {
        signButton: "Sign in",
        signHeader: "Login",
        method: "GET",
        signLink: "Haven't a account? Sign up",
        link: "/home",
      },
      violations: []
    }
  },
  methods: {

    signIn() {

      if(!this.validation())
        return


      this.$authoadization.auth.login({
        login: this.form.login,
        password: this.form.password,
      }).then(res => {

          return res.json()
      },
          (e) => {
          this.violations.push('Network error')
          console.log(e)
          }
          ).then(t => {
          this.$authoadizationMutations.authoadizationLogin(t['token'])
      }).then(() => this.$emit('success'))
    },
    referer() {
      this.$emit('referer')
    },
    validation() {

      this.v$.form.$touch()

      return !this.v$.form.$error
    }
  },
  validations() {

    return {

      form: {
        login: {
          required,
        },
        password: {
          required,
        },
      },
    }
  },
}
</script>

<style scoped>
  @import "@/css_part/vendor/normalize.css";
  @import "@/css_part/pages/home-page.css";
  @import "@/css_part/pages/header.css";
  @import "@/css_part/pages/registration.css";
  @import "@/css_part/vendor/style__registration.css";
</style>