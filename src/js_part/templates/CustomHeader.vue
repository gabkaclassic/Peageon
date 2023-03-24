<template>

  <header class="header">
    <div class="header__logo"><a href="/home" class="header__home-link"> Spoad </a></div>
    <nav class="header__nav">
      <div v-show="store.getters.authenticated" class="header__nav-elem"><a class="header__link" href="/gitoad">GitHub</a><img class="header__nav-icon-git" src="../../css_part/images/icons8-git.svg" alt="иконка Github"></div>
      <div v-show="store.getters.authenticated" class="header__nav-elem"><a class="header__link" href="#">AWS</a><img class="header__nav-icon-aws" src="../../css_part/images/icons8-скачать-из-облака-30.svg" alt="иконка AWS"></div>
    </nav>
    <div v-show="store.getters.authenticated" class="header__block-image"><a href="#"><img class="header__icon-notification" src="../../css_part/images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg" alt="иконка уведомлений"> </a></div>
    <div class="header__dropdown">
      <button class="header__dropbtn"><img class="header__icon-menu" src="../../css_part/images/Menu_icon_2_icon-icons.com_71856.svg" alt="иконка меню"></button>
      <div class="header__dropdown-content">
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#">Your profile</a>
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#">Settings</a>
        <a v-show="!store.getters.authenticated" class="header__dropdown-link" @click="signIn">Sign in</a>
        <a v-show="!store.getters.authenticated" class="header__dropdown-link" @click="signUp">Sign up</a>
        <a v-show="store.getters.authenticated" class="header__dropdown-link" href="#" @click="signOut">Sign out</a>
      </div>
    </div>

  </header>
</template>

<script>

import store from '@/store/store';
export default {
  name: "CustomHeader",
  data() {
    return {
      store: store
    }
  },
  methods: {

    signIn() {
      this.$emit('loginModal')
    },
    signUp() {

      this.$emit('registrationModal')
    },
    signOut() {
      this.$emit('logoutModal')
    },



  }
}
</script>

<style scoped>

  @import "@/css_part/pages/header.css";

</style>