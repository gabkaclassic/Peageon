<template>

  <button
    @click="test">
    CLICK
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
        await fetch('http://localhost:5004/auth?login=rodka123&password=saldkf1!!', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          credentials: 'include',
          mode: 'no-cors'
        }).then(res => console.log(res.))
      }
    }
  }

</script>

<style>

  @import "@/pages/styles/home-page.css";

</style>
