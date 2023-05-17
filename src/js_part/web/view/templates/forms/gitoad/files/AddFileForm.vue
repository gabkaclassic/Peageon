
<template>

    <form class="popup-upload__form">
        <textarea class="popup-upload__textarea" placeholder="Add an optional extends description..."></textarea>
        <div class="popup-upload__block-check">
            <label for="#" class="popup-upload__label">
                <input type="radio" name="#" id="#" checked class="popup-upload__radio" value="#">
                <span class="popup-upload__span"><img class="popup-upload__icon-check" src="@/css_part/images/git_commit_icon_128851.svg"> Commit directory yo the main branch</span>
            </label>
            <label for="#" class="#">
                <input type="radio" name="#" id="#" class="popup-upload__radio" value="#">
                <span class="popup-upload__span"><img class="popup-upload__icon-check" src="@/css_part/images/gitpull_120087.svg">Create a new branch for this commit and start a pull request</span>
            </label>
            <input class="popup-upload__input popup-upload__input_no-active" placeholder="New branch">
        </div>
        <div class="popup-upload__block-btns">
            <button type="submit" class="popup-upload__button-propose">Propose changes</button>
            <button type="submit" class="popup-upload__button-cancel">Cancel</button>
        </div>
    </form>

</template>

<script>


export default {
    name: 'AddFileForm',
}

</script>

<style scoped>

</style>