<template>

    <instagram-loader v-if="loading" />

    <section class="content__information" v-else>
        <div class="avatar-block"><img :src="avatar" class="avatar" alt="аватарка пользователя"></div>
        <p class="login"> {{ login }} </p>
        {{ bio }}
    </section>

</template>

<script>

import store from "@/js_part/data/storages/storages";
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
            bio: '',
            store: store,
            loading: true,
        }
    },
    methods: {
        getMyself() {

            if(!this.exists)
                return

            this.$gitoad.auth.myself()
                .then(res =>{

                    if(!res.ok) {
                        if(res.status === 401) {
                            this.$gitoadMutations.gitoadSetAuth(false)
                            this.$emit('unauthorized')
                        }
                        return
                    }

                    return res.json()
                } )
                .then(t => {

                    this.avatar = t['avatar']
                    this.login = t['name']
                    this.bio = t['bio']
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