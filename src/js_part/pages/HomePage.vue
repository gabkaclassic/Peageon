<template>

  <body class="page">
    <main>
      <div class="content"><p class="text-about-spoad">Ну мы короче такие классные, веселые и прикольные жабки, а это наше приложение. Если нравится, поставь квак в комментарии :)</p></div>
    </main>

  <div class="modal-window">
   
  </div>
  </body>

</template>

<script>

  export default {
    name: "App",
    components: {

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
