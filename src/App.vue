<template>

  <custom-header></custom-header>
  <div class="app">
    <router-view></router-view>
  </div>

  <custom-footer></custom-footer>

</template>

<script>

import CustomHeader from "@/components/CustomHeader.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {CustomHeader, CustomFooter}
}
</script>

<style>


</style>