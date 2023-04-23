<template>
    <div class="block-readme__line">
        <div class="block-readme__block">
            <p class="block-readme__title"> Readme </p>
        </div>
        <a class="block-readme__link-edit" href="#"><img class="block-readme__icon-edit" src="@/css_part/images/icons8-карандаш-24.svg" alt="иконка для редактирования"></a>
    </div>
    <div class="block-readme__main-block">

        {{ repository.readme.content }}
    </div>
</template>

<script>
export default {
    name: "ViewReadme"
}
</script>

<style scoped>

</style>