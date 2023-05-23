<template>


    <section class="popup">

        <button class="button-close" @click="close">
            <img style="width: 100%; height: 100%" src="@/css_part/images/close-icon-min.svg" alt="крестик">
        </button>

        <slot />

    </section>
</template>

<script>

export default {
  name: "ModalWindow",
    data() {
      return {
      }
    },
    methods: {
      close() {
          console.log('AAAAAAAAAAAAAAAAAA')
          this.$emit('close')
      },
    }

}
</script>

<style scoped>

  @import "@/css_part/pages/popup.css";
  @import "@/css_part/blocks/popup/button-close/button-close.css";
  @import "@/css_part/blocks/registration/form/form.css";

</style>