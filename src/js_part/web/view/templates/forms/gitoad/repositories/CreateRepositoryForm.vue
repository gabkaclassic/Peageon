<template>

    <AbstractForm
            :method="properties.method"
            :sign-header="properties.signHeader"
            :sign-button="properties.signButton"
            @submit.prevent="createRepository"
    >

        <div class="input-form">
            <input
                    type="text"
                    v-model.trim=form.name placeholder="Repository name"
                    :class= "`input-form__login ${v$.form.name.$dirty && v$.form.name.$error ? 'input-form_station_error' : ''}`"
                    name="name"
            >

            <forms-errors
                    v-show="v$.form.name.$dirty && v$.form.name.$error"
                    :errors="v$.form.name.$errors"
            />
        </div>

        <div class="input-form">
            <textarea
                style="resize: none;"
                type="text"
                rows="3"
                cols="30"
                v-model.trim=form.description placeholder="Description"
                class= "input-form__login"
                name="description"
            />
        </div>

        <div class="input-form">
            <input
                type="text"
                v-model.trim=form.defaultBranch placeholder="Default branch name"
                :class= "`input-form__login ${v$.form.defaultBranch.$dirty && v$.form.defaultBranch.$error ? 'input-form_station_error' : ''}`"
                name="defaultBranch"
            >
            <forms-errors
                v-show="v$.form.defaultBranch.$dirty && v$.form.defaultBranch.$error"
                :errors="v$.form.defaultBranch.$errors"
            />
        </div>

        <div class="input-form">
            <input
                type="text"
                v-model.trim=form.homepage placeholder="Homepage URL"
                class= "input-form__login"
                name="homepage"
            >
        </div>

        <p>
            <input
                type="checkbox"
                v-model="form.autoInit"
                name="autoInit"
            /> Auto init

        </p>

        <p>
            <input
                type="checkbox"
                v-model="form.isPrivate"
                name="isPrivate"
            /> Private

        </p>

        <p>
            <input
                type="checkbox"
                v-model="form.issuesEnable"
                name="issuesEnable"
            /> Enable issues

        </p>
        <p>
            <input
                type="checkbox"
                v-model="form.downloadsEnable"
                name="downloadsEnable"
            /> Enable downloads
        </p>
        <p>
            <input
                type="checkbox"
                v-model="form.isTemplate"
                name="isTemplate"
            /> Template
        </p>

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

import {useVuelidate} from "@vuelidate/core";
import FormsErrors from "@/js_part/web/view/templates/forms/errors/FormsErrors.vue";
import FormsViolations from "@/js_part/web/view/templates/forms/errors/FormsViolations.vue";
import AbstractForm from "@/js_part/web/view/templates/forms/AbstractForm.vue";
import {required} from "@vuelidate/validators";
import router from "@/js_part/web/routing/router";

export default {
    name: "CreateRepositoryForm",
    setup: () => ({ v$: useVuelidate() }),
    components: {FormsErrors, FormsViolations, AbstractForm},
    data() {
        return {
            form: {
                name: '',
                description: '',
                homepage: '',
                defaultBranch: 'master',
                autoInit: false,
                downloadsEnable: false,
                issuesEnable: false,
                isPrivate: false,
                isTemplate: false,
            },
            properties: {
                signButton: "Create",
                signHeader: "Creation repositories",
                method: "POST"
            },
            violations: []
        }
    },

    methods: {
        createRepository() {

            if(!this.validation())
                return

            this.violations = this.$gitoad.repos.create(this.form)
                .then(res => res.json())
                .then(t => {

                    let violations = t['violations']
                    let success = t['successOperation']
                    console.log(violations);
                    console.log(success);
                    if((violations === null || violations.length === 0) && success) {
                        this.goToCreatedRepo(this.form.name)
                    }
                    return violations
                })
        },
        validation() {

            this.v$.form.$touch()

            return !this.v$.form.$error
        },
        goToCreatedRepo(name) {
            router.push({path : '/gitoad/' + name})
        },
    },
    validations() {

        return {

            form: {
                name: {
                    required
                },
                defaultBranch: {
                    required
                },
            },

        }
    },
}
</script>

<style scoped>

</style>