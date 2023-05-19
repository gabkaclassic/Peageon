<template>

    <section class="files">
        <div class="block-settings">
            <div class="block-settings__branches">
                <div class="block-settings__nav-branches">
                    <button class="block-settings__dropbtn"> {{ branch }} </button>
                    <div class="block-settings__dropdown-content">
                        <a class="block-settings__dropdown-link"
                           v-for="branch in branches" :key="branch"
                           @click="changeBranch(branch)">
                            {{ branch }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="block-settings__info-number">
                <p class="block-settings__info-text" >
                    <img class="block-settings__icon" src="@/css_part/images/icons8-слияние-веток-в-git-50-_1_.svg" alt="иконка веток гита"> {{ branches.length }} branches
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
export default {
    name: "RepositoryInfo",
    components: {AddFileModal},
    data() {
        return {
            branch: this.currentBranch,
            store: store,
            filename: '',
        }
    },
    props: {
        currentBranch: {
            required: true,
            type: String
        },
        branches: {
            required: true,
            type: Array
        },
        owner: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
      repositoryUrl: {
        required: true,
        type: String
      }

    },
    methods: {
        changeBranch(branch) {
            if(this.currentBranch === branch)
                return
            this.branch = branch
            this.$emit('changeBranch', branch)
        },
        addFile() {
            this.$modalMutations.gitoadOpenUploadModal()
        },
      async copyUrl() {
        try {
          await navigator.clipboard.writeText(this.repositoryUrl);
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

<style scoped>
  @import "@/css_part/pages/registration.css";
</style>