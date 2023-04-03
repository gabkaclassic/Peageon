<template>

    <div class="content__information">
        <div class="avatar-block"><img :src="url" class="avatar" alt="аватарка пользователя"></div>
        <p class="login"> {{ login }} </p>
        <button class="button-edit-profile" name="button" type="button" @click="buttonEvent"> {{ buttonText }} </button>
    </div>

</template>

<script>
export default {
    name: "AvatarPicture",
    props: {
        url: {
            type: String,
            default: "../../css_part/images/pngwing.com.png"
        },
        login: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Edit your profile'
        }
    },
    methods: {
        buttonEvent() {
            this.$emit('buttonClick')
        }
    }
}
</script>

<style scoped>

</style>