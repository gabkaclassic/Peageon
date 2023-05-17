<template>


    <section class="popup">
        <div class="button-close"
             @click="close"
        >

        </div>

            <slot

            />

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
          document.getElementById("modal")
          this.$emit('close')
      },
    }

}
</script>

<style scoped>

  @import "@/css_part/pages/popup.css";

</style>