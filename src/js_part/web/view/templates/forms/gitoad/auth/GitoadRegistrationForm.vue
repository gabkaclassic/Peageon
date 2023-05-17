<template>

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
              v-model.trim=form.token placeholder="JWT"
              :class= "`input-form__login ${v$.form.token.$dirty && v$.form.token.$error ? 'input-form_station_error' : ''}`"
              name="token"
          >

          <forms-errors
              v-show="v$.form.token.$dirty && v$.form.token.$error"
              :errors="v$.form.token.$errors"
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

<script>


import FormsErrors from "@/js_part/web/view/templates/forms/errors/FormsErrors.vue";
import FormsViolations from "@/js_part/web/view/templates/forms/errors/FormsViolations.vue";
import AbstractForm from "@/js_part/web/view/templates/forms/AbstractForm.vue";
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
  name: "GitoadRegistrationForm",
  setup: () => ({ v$: useVuelidate() }),
  components: {FormsErrors, FormsViolations, AbstractForm},
  data() {
    return {
      form: {
        token: ''
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

      if(!this.validation())
          return

      this.violations = this.$gitoad.auth.registration(this.form)
          .then(res => res.json())
          .then(t => {

            let violations = t['violations']

            if(violations.length === 0) {
                this.$emit('success')
            }
            return violations
          })
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
       token: required,
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