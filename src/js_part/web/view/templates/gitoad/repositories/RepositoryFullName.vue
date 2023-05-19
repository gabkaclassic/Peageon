<template>
  <section class="track" v-if="repository">
    <span>
    <a class="track__point" :href="store.getters.gitoadProfileUrl">{{ repository.owner }}/</a>
      <a class="track__point" :href="repository.url">{{repository.name }}</a>
      </span>
  </section>
</template>
<script>
import store from "@/js_part/data/storages/storages"
export default {
  name: 'RepositoryFullName',
  data() {
    return {
      repository: store.getters.currentRepository,
      store: store,
    }
  },
}
</script>

<style>

</style>