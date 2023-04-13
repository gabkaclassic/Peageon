<template>

  <main>
    <slot
        name="authorized"
    />
    <slot name="unauthorized"
    />
    <slot name="anyway" />
  </main>


</template>

<script>

export default {
  name: "AuthorizedCheck",
}
</script>

<style scoped>

</style>