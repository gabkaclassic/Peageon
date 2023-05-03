<template>

  <header class="header">
    <div class="header__logo"><a href="/home" class="header__home-link"> Spoad </a></div>
    <nav class="header__nav">
      <div v-show="store.getters.authenticated" :class='"header__nav-elem " + (router.currentRoute.path === "/gitoad" ? "git-home-page__button-git" : "")'><a class="header__link" href="/gitoad">GitHub</a><a href="/gitoad"><img class="header__nav-icon-git" src="../../../../css_part/images/icons8-git.svg" alt="иконка Github"></a></div>
      <div v-show="store.getters.authenticated" class="header__nav-elem"><a class="header__link">AWS</a><a class="header__link"><img class="header__nav-icon-aws" src="../../../../css_part/images/icons8-скачать-из-облака-30.svg" alt="иконка AWS" /></a></div>
    </nav>
    <div v-show="store.getters.authenticated" class="header__block-image"><a href="#"><img class="header__icon-notification" src="../../../../css_part/images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg" alt="иконка уведомлений"> </a></div>
    <div class="header__dropdown">
      <button class="header__dropbtn"><img class="header__icon-menu" src="../../../../css_part/images/Menu_icon_2_icon-icons.com_71856.svg" alt="иконка меню"></button>
      <div class="header__dropdown-content">
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#">Your profile</a>
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#">Settings</a>
        <a v-show="!store.getters.authenticated" class="header__dropdown-link" @click="login">Sign in</a>
        <a v-show="!store.getters.authenticated" class="header__dropdown-link" @click="registration">Sign up</a>
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#" @click="logout">Sign out</a>
      </div>
    </div>

  </header>
</template>

<script>

import store from "@/js_part/data/storages/storages";
import {useRouter} from "vue-router";
import router from "@/js_part/web/routing/router";


export default {
  name: "CustomHeader",
  data() {
    return {
      store: store,
      router: useRouter()
    }
  },
  methods: {
    login() {
      this.$changeMainPageMode.login()
        router.push({path: '/home'})
    },
    registration() {
      this.$changeMainPageMode.registration()
        router.push({path: '/home'})
    },
    logout() {

        this.$authoadizationMutations.authoadizationLogout()
        this.$changeMainPageMode.main()
        this.$gitoadMutations.gitoadNotAuth()
        router.push({path: '/home'})
    },
  }
}
</script>

<style scoped>

  @import "@/css_part/pages/header.css";
  @import "@/css_part/pages/git-home-page.css";

</style>