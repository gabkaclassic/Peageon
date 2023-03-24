<template>

  <custom-header/>




  <custom-footer/>

</template>

<script>
import CustomHeader from "@/js_part/templates/CustomHeader.vue";
import CustomFooter from "@/js_part/templates/CustomFooter.vue";

import store from '@/store/store';
export default {
  name: "GitoadPage",
  components: {CustomFooter, CustomHeader},
  beforeMount() {
    this.existsCheck()
  },
  methods: {
    existsCheck() {
      this.$gitoad.exists()
    }
  },
  data() {
    return {
      store: store,

    }
  }
}
</script>

<style scoped>

</style>