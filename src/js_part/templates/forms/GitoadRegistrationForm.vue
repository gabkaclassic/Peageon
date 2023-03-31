<template>

  <authorized-check>
    <template v-slot:anyway>
      <AbstractForm
          :method="properties.method"
          :sign-header="properties.signHeader"
          :sign-button="properties.signButton"
          :link="properties.link"
          :signLink="properties.signLink"
          @submit.prevent="signUp"
          @referer="referer"
      >

        <div class="input-form">
          <input
              type="text"
              v-model.trim=form.jwt placeholder="JWT"
              :class= "`input-form__login ${v$.form.jwt.$dirty && v$.form.jwt.$error ? 'input-form_station_error' : ''}`"
              name="jwt"
          >

          <forms-errors
              v-show="v$.form.jwt.$dirty && v$.form.jwt.$error"
              :errors="v$.form.jwt.$errors"
          />
        </div>

        <forms-errors
            v-show="v$.form.$dirty && v$.form.$error"
            :errors="v$.form.$errors"
        />
        <forms-violations
            v-show="!violations.empty && !(v$.form.$dirty && v$.form.$error)"
            :violations="violations"
        />


      </AbstractForm>
    </template>

  </authorized-check>

</template>

<script>


import FormsErrors from "@/js_part/templates/forms/FormsErrors.vue";
import FormsViolations from "@/js_part/templates/forms/FormsViolations.vue";
import AbstractForm from "@/js_part/templates/forms/AbstractForm.vue";
import {useVuelidate} from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
import AuthorizedCheck from "@/js_part/templates/AuthorizedCheck.vue";
import store from "@/storages/storages";

export default {
  name: "GitoadRegistrationForm",
  setup: () => ({ v$: useVuelidate() }),
  components: {AuthorizedCheck, FormsErrors, FormsViolations, AbstractForm},
  data() {
    return {
      form: {
        token: store.getters.sessionToken,
        jwt: ''
      },
      properties: {
        signButton: "Sign up",
        signHeader: "Registration in GiToad",
        method: "POST"
      },
      violations: []
  }
  },

  methods: {
    signUp() {

      this.violations = this.$gitoad.auth.registration(this.form)
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
      console.log()
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
       jwt: required,
       require: helpers.withMessage(
           "Login and password must be specified together",
           (value) => {
             return value.password.empty === value.login.empty
           }
       )
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