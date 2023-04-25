<template>

    <section class="files">
        <div class="block-settings">
            <div class="block-settings__branches">
                <div class="block-settings__nav-branches">
                    <button class="block-settings__dropbtn"> {{ currentBranch }} </button>
                    <div class="block-settings__dropdown-content">
                        <a class="block-settings__dropdown-link" v-for="branch in branches" :key="branch">
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
            <button class="block-btns__item">Go to file</button>
            <div class="block-btns__branches">
                <div class="block-btns__nav-branches">
                    <button class="block-btns__item">Add file</button>
                    <div class="block-btns__dropdown-content">
                        <a class="block-btns__dropdown-link" href="#">Create new file</a>
                        <a class="block-btns__dropdown-link" href="#">Upload files</a>
                    </div>
                </div>
            </div>
            <div class="block-btns__branches">
                <div class="block-btns__nav-branches">
                    <button class="block-btns__item">
                        Code
                    </button>
                    <div class="block-btns__dropdown-content">
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: "RepositoryInfo",
    props: {
        currentBranch: {
            required: true
        },
        branches: {
            required: true,
            type: Array
        }
    },
}
</script>

<style scoped>

</style>