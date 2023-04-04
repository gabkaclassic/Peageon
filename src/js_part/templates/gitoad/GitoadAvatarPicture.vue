<template>

    <section class="content__information">
        <div class="avatar-block"><img :src="avatar" class="avatar" alt="аватарка пользователя"></div>
        <p class="login"> {{ login }} </p>
        <button class="button-edit-profile" name="button" type="button" @click="buttonEvent">  {{ avatar }} Edit profile </button>
    </section>

</template>

<script>

import store from "@/storages/storages";
export default {
    name: "GitoadAvatarPicture",
    data() {
        return {
            avatar: '',
            login: '',
            store: store
        }
    },
    methods: {
        buttonEvent() {
            this.$emit('buttonClick')
        },
        getMyself() {

            this.$gitoad.auth.myself()
                .then(res => res.json())
                .then(t => {
                    this.avatar = t['avatar']
                    this.login = t['name']
                })
        }
    },
    created() {
        this.getMyself()
    }
}
</script>

<style scoped>

</style>