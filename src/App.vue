<template>

  <custom-header></custom-header>
  <div class="app">
    <router-view></router-view>
  </div>

  <custom-footer></custom-footer>

</template>

<script>

import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";

export default {
  // eslint-disable-next-line vue/no-unused-css_part
  components: {CustomHeader, CustomFooter}
}
</script>

<style>


</style>