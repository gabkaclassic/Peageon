<template>

  <label class="label label_station_error">
    <div v-for="(violation, id) in violations"
         :key="id"
    >
      <div>{{ violation }}</div>
    </div>
  </label>

</template>

<script>
export default {
  name: "FormsViolations",
  props: {
    violations: {
      type: Array,
      required: true,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>