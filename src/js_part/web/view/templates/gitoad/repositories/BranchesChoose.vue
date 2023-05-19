<template>
  <div class="block-settings__branches">
    <div class="block-settings__nav-branches">
      <button class="block-settings__dropbtn"> {{ branch }}</button>
      <div class="block-settings__dropdown-content">
        <a class="block-settings__dropdown-link"
           v-for="branch in branches" :key="branch"
           @click="changeBranch">
          {{ branch }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/js_part/data/storages/storages"
export default {
  name: 'BranchesChoose',
  data() {
    return {
      store: store,
      branch: store.getters.gitoadBranch,
      branches: store.getters.currentRepository?.branches,
    }
  },
  methods: {

    changeBranch(branch) {
      if(store.getters.gitoadBranch === branch)
        return
      this.branch = branch
      this.$emit('changeBranch', branch)
    },
  },
}
</script>

<style>
  @import "@/css_part/pages/commits.css";
</style>