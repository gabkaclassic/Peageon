<template>

  <AbstractForm
      :method="properties.method"
      :sign-header="properties.signHeader"
      :sign-button="properties.signButton"
      :link="properties.link"
      :signLink="properties.signLink"
      @referer="referer"
      @submit.prevent="signUp"
  >
    <div class="input-form">
      <input
          type="text"
          v-model.trim=form.email placeholder="Email"
          :class= "`input-form__email ${v$.form.email.$dirty && v$.form.email.$error ? 'input-form_station_error' : ''}`"
          name="email"
      >
      <forms-errors
          v-show="v$.form.email.$dirty && v$.form.email.$error"
          :errors="v$.form.email.$errors"
      />
    </div>

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
          v-model.trim=form.password placeholder="Password"
          :class= "`input-form__password ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
          name="password">
      <forms-errors
          v-show="v$.form.password.$dirty && v$.form.password.$error"
          :errors="v$.form.password.$errors"
      />
    </div>

    <div class="input-form">
      <input
          type="password"
          v-model.trim=form.confirmPassword placeholder="Confirm password"
          :class= "`input-form__password ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
          name="confirmPassword"
      >
      <forms-errors
          v-show="v$.form.confirmPassword.$dirty && v$.form.confirmPassword.$error"
          :errors="v$.form.confirmPassword.$errors"
      />

    </div>
    <forms-violations
        v-show="!violations.empty"
        :violations="violations"
    />
  </AbstractForm>

</template>

<script>
import AbstractForm from "@/js_part/templates/forms/AbstractForm.vue";
import {useVuelidate} from "@vuelidate/core";
import {email, maxLength, minLength, required} from "@vuelidate/validators";
import FormsViolations from "@/js_part/templates/forms/FormsViolations.vue";
import FormsErrors from "@/js_part/templates/forms/FormsErrors.vue";

export default {
  name: "RegistrationForm",
  components: {FormsErrors, FormsViolations, AbstractForm},
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      form: {
        login: '',
        password: '',
        confirmPassword: '',
        email: '',
      },
      properties: {
        signButton: "Sign up",
        signHeader: "Registration",
        signLink: "Have a account? Sign in",
        link: "/home",
        method: "POST"
      },
      violations: []
    }
  },
  methods: {

    signUp() {

      if(!this.validation())
        return

      this.$authoadization.auth.registration({
        login: this.form.login,
        email: this.form.email,
        password: this.form.password,
      })
          .then(res => res.text()).then(body => {
        this.violations = []
        this.violations = JSON.parse(body)['violations']

        if(this.violations.length !== 0) {
          return;
        }

        this.$emit('success')
      })

    },
    referer() {
      this.$emit('referer')
    },
    success() {
      this.$emit('successRegistry')
    },
    validation() {

      this.v$.form.$touch()

      return !this.v$.form.$error
    }
  },
  validations() {

    const expression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!,?./])(?=\S+$).{8,}$/;

    return {

      form: {
        login: {
          required,
          maxLength: maxLength(32),

        },
        email: {
          required, email
        },
        password: {
          required,
          minLength: minLength(8),
          validPassword(value) {
            return expression.test(value)
          }
        },
        confirmPassword: {
          validConfirm(value) {
            console.log(value === this.form.password)
            return value === this.form.password
          },
        }
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