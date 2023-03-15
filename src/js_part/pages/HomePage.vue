<template>

  <main>
    <div class="content"><p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p></div>
  </main>

</template>

<script>

  import myForm from "../templates/Forms.vue";
  import person from "../templates/Person.vue";
  export default {
    name: "App",
    components: {
      // eslint-disable-next-line vue/no-unused-css_part
      myForm, person
    },
    data() {
      return {
      }
    },
    methods: {

    }
  }

</script>

<style>

  @import "@/css_part/pages/home-page.css";

</style>
