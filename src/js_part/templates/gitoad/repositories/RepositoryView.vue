<template>

  <h5> {{ repository['name'] }} </h5>
  <i>{{ repository['url'] }}</i>
  {{ repository['readme'] }}
  {{ repository['commits'] }}
  {{ repository['branches'] }}
  {{ repository['languages'] }}


</template>

<script>

export default {
  name: "RepositoryView",
  data() {
    return {
    }
  },
  props: {
    repository: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>

