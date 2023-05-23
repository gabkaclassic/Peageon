<template>

    <section class="files">
        <div class="block-settings">
          <BranchesChoose />
            <div class="block-settings__info-number">
                <p class="block-settings__info-text" >
                    <img class="block-settings__icon" src="@/css_part/images/icons8-слияние-веток-в-git-50-_1_.svg" alt="иконка веток гита"> {{ store.getters.currentRepository.branches.length }} branches
                </p>
            </div>
        </div>
        <div class="block-btns">
          <input @keyup="searchFile" style="width: 150px; margin-left: -30px;" type="search" v-model.trim="filename" class="input-form__login" placeholder="Search by filename"/>
            <div class="block-btns__branches">
                <div class="block-btns__nav-branches">
                    <button @click="addFile" class="block-btns__item">Add file</button>
                </div>
            </div>
            <div class="block-btns__branches">
                <div class="block-btns__nav-branches">
                    <button @click="copyUrl" class="block-btns__item">
                        Clone
                    </button>
                </div>
            </div>
        </div>
    </section>
    <add-file-modal v-if="store.getters.uploadModal"/>

</template>

<script>
import AddFileModal from "@/js_part/web/view/templates/modals/gitoad/files/AddFileModal.vue";
import store from "@/js_part/data/storages/storages"
import BranchesChoose from "@/js_part/web/view/templates/gitoad/repositories/BranchesChoose.vue";
export default {
    name: "RepositoryInfo",
    components: {BranchesChoose, AddFileModal},
    data() {
        return {
            branch: this.currentBranch,
            store: store,
            filename: '',
            repositoryUrl: store.getters.currentRepository.url,
        }
    },
    methods: {
        addFile() {
            this.$modalMutations.gitoadOpenUploadModal()
        },
      async copyUrl() {
        try {
          await navigator.clipboard.writeText('git clone ' + this.repositoryUrl);
          alert('Copied to cloning');
        } catch($e) {
          alert('Cannot copy (sad croak)');
        }
      },
      searchFile() {
        this.$emit('search', this.filename)
      }
    },
}

</script>