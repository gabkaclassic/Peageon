<template>

    <modal-window>

        <registration-form
                @referer="login"
                @success="main"
        />

    </modal-window>

</template>

<script>
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";
import RegistrationForm from "@/js_part/web/view/templates/forms/authoadization/AuthoadizationRegistrationForm.vue";

export default {
    name: "AuthoadizationRegistrationModal",
    components: {RegistrationForm, ModalWindow},
    methods: {
        login() {
            this.$changeMainPageMode.login()
        },
        main() {
            this.$changeMainPageMode.main()
        },
    }
}
</script>

<style scoped>

</style>