<template>

  <body class="page">
  <h1 class="form-logo">Spoad</h1>
  <form
      class="form"
      method="GET"
      @submit.prevent="signIn"
  >
    <h2 class="form__registration">Регистрация</h2>
    <div class="input-form">
      <input type="text" v-model.trim=form.email placeholder="email" class="input-form__email" name="email">
      <label v-if="v$.form.email.$error">
        {{ v$.form.email.$errors[0].$message }}
      </label>
    </div>
    <div class="input-form">
      <input type="text" v-model.trim="form.login" placeholder="Login" class="input-form__login" name="login">
      <label v-if="v$.form.login.$error">
        {{ v$.form.login.$errors[0].$message }}
      </label>
    </div>
    <div class="input-form">
      <input type="password" v-model.trim=form.password placeholder="Password" class="input-form__password" name="password">
      <label v-if="v$.form.password.$error">
        {{ v$.form.password.$errors[0].$message }}
      </label>
    </div>
    <div class="input-form">
      <input type="password" v-model.trim=form.confirmPassword placeholder="Confirm password" class="input-form__password">
      <label v-if="v$.form.confirmPassword.$error">
        {{ v$.form.confirmPassword.$errors[0].$message }}
      </label>
      <label v-show="!violations.empty">
        <div v-for="(violation, id) in violations"
        :key="id"
        >
          <div>{{ violation }}</div>
        </div>
      </label>
    </div>
    <div class="input-form">
      <input
          type="submit"
          value="Create account"
          class = "input-form__bottom_registration"
      >
      <a href="/login" class="link link_active_sign-in">Have a account? Sign in</a>
    </div>
  </form>
  </body>

</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, between } from '@vuelidate/validators'
import router from "@/router/router";
import store from "@/store/store";
export default {
  name: "RegistrationPage",

  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      form: {
        login: '',
        password: '',
        confirmPassword: '',
        email: '',
      },
      violations: []
    }
  },

  methods: {

    signUp() {
      
      if(this.validation())
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

        router.push('/home')
      })

    },
    signIn() {
      
      if(this.validation())
        return


      this.$authoadization.auth.login({
        login: this.form.login,
        password: this.form.password,
      }).then(res => res.text())
          .then(
              t => {
                store.dispatch('setToken', JSON.parse(t)['token'])
              },
              error => console.log(error)
          )

      if(store.getters.authenticated)
        router.push('/home')
    },
    validation() {

      this.v$.form.$touch()

      return this.v$.form.dirty && !!(this.v$.form.$error)
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
          between: between(8, 128),
          validPassword(value) {
            return expression.test(value)
          }
        },
        confirmPassword: {
          validConfirm(value) {
            return value === this.form.password
          }
        }
      },
    }
  },
}
</script>

<style scoped>

  @import "@/pages/styles/registration.css";
  @import "@/pages/styles/header.css";
  @import "@/pages/styles/home-page.css";
  @import "@/pages/vendor/normalize.css";
  @import "@/pages/vendor/style__registration.css";

</style>