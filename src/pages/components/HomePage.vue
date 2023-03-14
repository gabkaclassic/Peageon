<template>

  <button
    @click="test">
  </button>
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

      async test() {
        await this.$authoadization.auth.login({'login': 'rodka123', 'password': 'saldkf1!!' }).then(response=>response.json())
            .then(data=>{ console.log(data['token']); })
      }
    }
  }

</script>

<style>

  @import "@/pages/styles/home-page.css";

</style>
