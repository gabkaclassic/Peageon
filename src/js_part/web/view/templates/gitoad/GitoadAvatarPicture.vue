<template>

    <instagram-loader v-if="loading" />

    <section class="content__information" v-else>
        <div class="avatar-block"><img :src="avatar" class="avatar" alt="аватарка пользователя"></div>
        <p class="login"> {{ login }} </p>
        <button class="button-edit-profile" name="button" type="button" @click="buttonEvent"> Edit profile </button>
    </section>

</template>

<script>

import store from "@/js_part/data/storage/storages";
import {InstagramLoader} from "vue-content-loader";
export default {
    name: "GitoadAvatarPicture",
    components: {InstagramLoader},
    props: {
      exists: {
          type: Boolean,
          default: false
      }
    },
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

            if(!this.exists)
                return

            this.$gitoad.auth.myself()
                .then(res =>{

                    if(!res.ok) {
                        this.$gitoadMutations.gitoadSetAuth(false)
                        return
                    }

                    return res.json()
                } )
                .then(t => {

                    this.avatar = t['avatar']
                    this.login = t['name']
                    this.$gitoadMutations.gitoadSetLogin(t['login'])
                })
                .then(() => this.loading = false)
        }
    },
    async created() {

        if (this.avatar === null || this.avatar.length === 0)
            await this.getMyself()

        this.getMyself()
        setInterval(this.getMyself, 3600000)
    },
}
</script>

<style scoped>

</style>