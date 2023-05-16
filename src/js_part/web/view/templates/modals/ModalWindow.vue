<template>


    <section :class="'popup' + (closed ? ' no-active' : '')">
        

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
          this.closed = true
      }
    }

}
</script>

<style scoped>

  @import "@/css_part/pages/popup.css";

</style>