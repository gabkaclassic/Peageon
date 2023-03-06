<template>

  <div class="root">
    {{ `${name} ${age} ${married}`}}
    <button
        @click="changeName"
        value="BOM"
    />
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  props: ['name', 'age', 'married'],
  date() {
    return {
      name: "SDF"
    }
  },
  methods: {
    changeName() {
      this.$emit('changeName', name)
    }
  }
}
</script>

<style scoped>

</style>