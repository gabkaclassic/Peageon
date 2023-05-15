<template>


      <form
          class="form"
          method="{{ method }}"
      >
        <h2 class="form__registration">{{ signHeader }}</h2>

        <slot />

        <div class="input-form">
          <input
              type="submit"
              :value=signButton
              class = "input-form__bottom_registration"
          >
          <a v-if="link !== null" href="{{ link }}" class="link link_active_sign-in" @click.prevent="referer"> {{ signLink }} </a>
        </div>
      </form>

</template>

<script>

export default {

  name: "AbstractForm",
  props: {
    link: {
      type: String,
      default: null
    },
    signLink: {
      type: String,
      default: 'Go to homepage'
    },
    signButton: {
      type: String,
      required: true
    },
    signHeader: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
  },
  methods: {
    referer() {
      this.$emit('referer')
    }
  }

}
</script>

<style scoped>

  @import "@/css_part/vendor/normalize.css";
  @import "@/css_part/pages/home-page.css";
  @import "@/css_part/pages/header.css";
  @import "@/css_part/pages/registration.css";
  @import "@/css_part/vendor/style__registration.css";

</style>