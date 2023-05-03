<template>

  <modal-window @close="toMainPage">

    <gitoad-registration-form
            @success="successRegistration"
            @referer="toMainPage"
    />

  </modal-window>
</template>

<script>
import GitoadRegistrationForm from "@/js_part/web/view/templates/forms/gitoad/GitoadRegistrationForm.vue";
import ModalWindow from "@/js_part/web/view/templates/modals/ModalWindow.vue";

export default {
    name: "GitoadRegistrationModal",
    components: {ModalWindow, GitoadRegistrationForm},
    methods: {
        successRegistration() {
            this.$gitoadMutations.gitoadExist()
            this.$router.go(this.$router.currentRoute)
        },
        toMainPage() {
            this.$changeMainPageMode.main()
        },
    }
}
</script>

<style scoped>

</style>