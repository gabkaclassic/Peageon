<template>

  <main>
    <div class="content"><p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p></div>
  </main>

</template>

<script>

  import myForm from "../../components/Forms.vue";
  import person from "../../components/Person.vue";
  export default {
    name: "App",
    components: {
      // eslint-disable-next-line vue/no-unused-components
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

  @import "@/pages/styles/home-page.css";

</style>
