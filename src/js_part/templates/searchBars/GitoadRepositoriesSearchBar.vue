<template>

    <div class="input-block">
        <input name="q" placeholder="Find a repositoty..." type="search" class="input-block__search">
        <div class="input-block__dropbtns">
            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Type<img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" href="#">All</button>
                    <button class="input-block__dropdown-button" href="#">Public</button>
                    <button class="input-block__dropdown-button" href="#">Private</button>
                    <button class="input-block__dropdown-button" href="#">Sources</button>
                    <button class="input-block__dropdown-button" href="#">Forks</button>
                    <button class="input-block__dropdown-button" href="#">Archived</button>
                    <button class="input-block__dropdown-button" href="#">Mirrors</button>
                    <button class="input-block__dropdown-button" href="#">Templates</button>
                </div>
            </div>

            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Language <img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" href="#">All</button>
                    <button class="input-block__dropdown-button" href="#">CSS</button>
                    <button class="input-block__dropdown-button" href="#">HTML</button>
                    <button class="input-block__dropdown-button" href="#">Java</button>
                    <button class="input-block__dropdown-button" href="#">C++</button>
                    <button class="input-block__dropdown-button" href="#">C#</button>
                    <button class="input-block__dropdown-button" href="#">Java Script</button>
                    <button class="input-block__dropdown-button" href="#">Python</button>
                </div>
            </div>
            <div class="input-block__dropdown-block">
                <button class="input-block__dropbtn">Sort<img class="input-block__icon" src="@/css_part/images/icons8-шеврон-вверх-в-круге-30.png.svg" alt="иконка срелки вниз"></button>
                <div class="input-block__dropdown-content">
                    <button class="input-block__dropdown-button" href="#">Last updated</button>
                    <button class="input-block__dropdown-button" href="#">Name</button>
                </div>
            </div>
        </div>
        <div class="input-block__button-new"><a href="#" class="input-block__link">New</a></div>
    </div>

</template>

<script>
export default {
    name: "GitoadRepositoriesSearchBar"
}
</script>

<style scoped>

</style>