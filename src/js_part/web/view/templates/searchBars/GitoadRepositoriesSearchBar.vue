<template>

    <div class="input-block">
        <input placeholder="Find a repositoty..." type="search" class="input-block__search" v-model.trim="filename" @keyup="searchByName">
        <div class="input-block__dropbtns">
            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Type<img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" @click="all">All</button>
                    <button class="input-block__dropdown-button" @click="filterByPublic">Public</button>
                    <button class="input-block__dropdown-button" @click="filterByPrivate">Private</button>
                    <button class="input-block__dropdown-button" @click="filterByFork">Forks</button>
                    <button class="input-block__dropdown-button" @click="filterByArchived">Archived</button>
                    <button class="input-block__dropdown-button" @click="filterByTemplate">Templates</button>
                </div>
            </div>

            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Language <img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" @click="filterByLanguage('All')">All</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('CSS')">CSS</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('HTML')">HTML</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('Java')">Java</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('C++')">C++</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('C#')">C#</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('Java Script')">Java Script</button>
                    <button class="input-block__dropdown-button" @click="filterByLanguage('Python')">Python</button>
                </div>
            </div>
            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Sort<img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" @click="sortByLastUpdate">Last updated</button>
                    <button class="input-block__dropdown-button" @click="sortByName">Name</button>
                </div>
            </div>
        </div>
        <div class="input-block__button-new" @click="openModal"><a href="#" class="input-block__link">New</a></div>
    </div>

    <create-repository-modal
        v-if="store.getters.repositoryModal"
        @close="closeModal"
    />

</template>

<script>
import CreateRepositoryModal from "@/js_part/web/view/templates/modals/gitoad/repositories/CreateRepositoryModal.vue";
import store from "@/js_part/data/storages/storages";

export default {
    name: "GitoadRepositoriesSearchBar",
    components: {CreateRepositoryModal},
    data() {
        return {
            store: store,
            filename: '',
        }
    },
    methods: {
        sortByName() {
            this.$emit('sortByName')
        },
        sortByLastUpdate() {
            this.$emit('sortByDate')
        },
        filterByLanguage(language) {
            this.$emit('filterByLanguage', language)
        },
        filterByPrivate() {
            this.$emit('filterByPrivate')
        },
        filterByPublic() {
            this.$emit('filterByPublic')
        },
        filterByFork() {
            this.$emit('filterByFork')
        },
        filterByArchived() {
            this.$emit('filterByArchived')
        },
        filterByTemplate() {
            this.$emit('filterByTemplate')
        },
        all() {
            this.$emit('all')
        },
        searchByName() {
            this.$emit('searchByName', this.filename)
        },
        closeModal() {
            this.$modalMutations.gitoadCloseRepositoryModal()
        },
        openModal() {
            this.$modalMutations.gitoadOpenRepositoryModal()
        },
    }
}
</script>

<style scoped>

</style>