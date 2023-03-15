<template>

  <body class="root">
    <custom-header></custom-header>
    <div class="app">
      <router-view></router-view>
    </div>

  <custom-footer></custom-footer>

  </body>
</template>

<script>

import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";

export default {
  components: {CustomHeader, CustomFooter}
}
</script>

<style>

</style>