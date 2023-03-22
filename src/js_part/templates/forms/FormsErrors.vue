<template>

  <label class="label label_station_error">
    <div v-for="error in errors.slice(0, 1)" :key="error">
      {{ error.$message }}
    </div>
  </label>

</template>

<script>
export default {
  name: "FormsErrors",
  props: {
    errors: {
      type: Array,
      required: true,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>