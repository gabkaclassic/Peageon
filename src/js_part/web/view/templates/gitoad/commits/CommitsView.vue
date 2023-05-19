<template>
  <main class="commits">

    <RepositoryFullName />
      
    <section class="content">

      <branches-choose />

      <ul class="list">
        <li class="commit" v-for="commit in store.getters.gitoadCommits" :key="commit">
          <p class="commit__date">{{ commit.date }}</p>
          <ul class="commit__grid">
            <li class="commit__item">
              <div>
                <span href="#" class="commit__name">{{ commit.message }}</span>
                <p class="commit__com">{{ commit.commiter }}<span class="commit__span"></span></p>
              </div>
              <div class="commit__block-btns">
                <button @click="copySha(commit.sha)" class="commit__btn-copy"><img class="commit__icon-copy" src="@/css_part/images/free-icon-copies-167051.svg"></button>
                <button class="commit__btn-id"><a class="commit__link-id" :href="commit.url">{{ commit.sha.substring(0, 6) }}</a></button>
                <button @click="toCommit(commit.sha)" class="commit__btn-id commit__btn-id-min-size"></button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>

</template>

<script>
import RepositoryFullName from "@/js_part/web/view/templates/gitoad/repositories/RepositoryFullName.vue";
import BranchesChoose from "@/js_part/web/view/templates/gitoad/repositories/BranchesChoose.vue";
import store from "@/js_part/data/storages/storages"

export default {
  name: "CommitsView",
  components: {BranchesChoose, RepositoryFullName},
  data() {
    return {
      store: store,
      name: 'sdf'
    }
  },
  methods: {
    async copySha(sha) {
      try {
        await navigator.clipboard.writeText(sha);
        alert('Commit sha was copied ');
      } catch($e) {
        alert('Cannot copy (sad croak)');
      }
    },
    toCommit(sha) {
      console.log(sha);
    },
  },
}
</script>

<style>
  @import "@/css_part/pages/commits.css";
</style>