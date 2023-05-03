<template>


    <section class="popup">
        <div class="button-close"
             @click="close"
        >

        </div>

            <slot
                    @blur="close"
            />

    </section>

</template>

<script>

export default {
  name: "ModalWindow",
    data() {
      return {
          closed: false
      }
    },
    methods: {
      close() {
          this.$emit('close')
      },
      open() {
          this.closed = false
      }
    }

}
</script>

<style scoped>

  @import "@/css_part/pages/popup.css";

</style>