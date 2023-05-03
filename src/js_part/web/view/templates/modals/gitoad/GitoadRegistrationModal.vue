<template>

  <gitoad-registration-form
          @success="successRegistration"
          @referer="toMainPage"
  />

</template>

<script>
import GitoadRegistrationForm from "@/js_part/web/view/templates/forms/gitoad/GitoadRegistrationForm.vue";

export default {
    name: "GitoadRegistrationModal",
    components: {GitoadRegistrationForm},
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