<template>
  <custom-header />

  <div v-if="store.getters.mainMode">
    <main-page />
  </div>
  <div v-else-if="store.getters.gitoadMode">
    <gitoad-page />
  </div>

</template>

<script>
import MainPage from "@/js_part/pages/MainPage.vue";
import GitoadPage from "@/js_part/pages/GitoadPage.vue";
import store from "@/storages/storages";
import CustomHeader from "@/js_part/templates/CustomHeader.vue";
export default {
  name: "FunctionalPage",
  components: {CustomHeader, GitoadPage, MainPage},
  data() {
    return {
      store: store,
  }
  },
}
</script>

<style scoped>

</style>