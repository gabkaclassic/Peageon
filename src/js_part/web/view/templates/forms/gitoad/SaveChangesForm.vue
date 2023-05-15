<template>

    <AbstractForm
            :method="properties.method"
            :sign-header="properties.signHeader"
            :sign-button="properties.signButton"
            :link="properties.link"
            :signLink="properties.signLink"
            @submit.prevent="save"
    >

        <div class="input-form">
            <textarea
                    cols="30"
                    rows="5"
                    autofocus
                    type="text"
                    v-model.trim=form.message placeholder="Commit message"
                    :class= "`input-form__login ${v$.form.message.$dirty && v$.form.message.$error ? 'input-form_station_error' : ''}`"
                    name="token"
            />

            <forms-errors
                    v-show="v$.form.message.$dirty && v$.form.message.$error"
                    :errors="v$.form.message.$errors"
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
import {helpers, required} from "@vuelidate/validators";

export default {
    name: "SaveChangesForm",
    setup: () => ({ v$: useVuelidate() }),
    components: {FormsErrors, FormsViolations, AbstractForm},
    data() {
        return {
            form: {
                message: '',
            },
            properties: {
                signButton: "Commit",
                signHeader: "Save your changes",
                method: "POST",

            },
            violations: []
        }
    },

    methods: {
        save(){

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