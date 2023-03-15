<template>

  <button
    @click="test">
  </button>
  <main class="main">
    <div class="content"><p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p></div>
  </main>

  <div class="modal-window">
   
  </div>

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

  .modal-window{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    /*------------------------------------ */
    width: 300px;
    height: 300px;
    background-color: red;
        /*------------------------------------ */
  }


</style>
