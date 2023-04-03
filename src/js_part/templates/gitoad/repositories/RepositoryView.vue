<template>

    <div class="table__column" >
        <a class="table__rep-name" :href="repository.url">{{ repository.name }}</a>
    </div>
    <div class="table__block-active"> {{ repository.private ? 'Private' : 'Public' }} </div>

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
      type: Object,
        required: true
    }
  }
}
</script>

<style scoped>
    @import "@/css_part/pages/git-home-page.css";
</style>

