<template>

    <instagram-loader v-if="loading" />

    <section class="content__information" v-else>
        <div class="avatar-block"><img :src="avatar" class="avatar" alt="аватарка пользователя"></div>
        <p class="login"> {{ login }} </p>
        <button class="button-edit-profile" name="button" type="button" @click="buttonEvent"> Edit profile </button>
    </section>

</template>

<script>

import store from "@/js_part/storage/storages";
import {InstagramLoader} from "vue-content-loader";
export default {
    name: "GitoadAvatarPicture",
    components: {InstagramLoader},
    data() {
        return {
            avatar: '',
            login: '',
            store: store,
            loading: true
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
                    this.$gitoadMutations.gitoadSetLogin(t['login'])
                })
                .then(() => this.loading = false)
        },
        fetchEventsList: function() {
            this.getMyself()
        }
    },
    async created() {

        if (this.avatar === null || this.avatar.length === 0)
            await this.getMyself()

        this.fetchEventsList()
        setInterval(this.fetchEventsList, 600000)
    },
}
</script>

<style scoped>

</style>