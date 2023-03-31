<template>

  <custom-header />

  <div class="modal-window">
    <gitoad-registration-form
        v-if="!exist"
        @success="successRegistration"
        @referer="toMainPage"
    />
  </div>


  <custom-footer/>

</template>

<script>
import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";
import GitoadRegistrationForm from "@/js_part/templates/forms/GitoadRegistrationForm.vue"

export default {
  name: "GitoadPage",
  components: {GitoadRegistrationForm, CustomFooter, CustomHeader},
  data() {
    return {
      exist: false
    }
  },
  methods: {

    successRegistration() {

      this.exist = true

    },

    exists() {
      this.$gitoad.auth.exists()
          .then(res => res.text())
          .then(t => {

            this.exist = JSON.parse(t)['successOperation']
          }, err => console.error(err))
    },
    toMainPage() {
      this.$changeMainPageMode.main()
      this.$changeGlobalMode.globalMain()
    }
  },
}
</script>

<style scoped>

  @import "@/css_part/blocks/modal-window/modal-window.css";

</style>