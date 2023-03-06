<template>

  <header class="header">
    <div class="header__logo">Spoad</div>
    <nav class="header__nav">
      <div class="header__nav-elem"><a class="header__link" href="#">GitHub</a><img class="header__nav-icon-git" src="../pages/images/icons8-git.svg" alt="иконка Github"></div>
      <div class="header__nav-elem"><a class="header__link" href="#">AWS</a><img class="header__nav-icon-aws" src="../pages/images/icons8-скачать-из-облака-30.svg" alt="иконка AWS"></div>
    </nav>
    <div class="header__block-image"><a href="#"><img class="header__icon-notification" src="../pages/images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg" alt="иконка уведомлений"> </a></div>
    <div class="header__dropdown">
      <button class="header__dropbtn"><img class="header__icon-menu" src="../pages/images/Menu_icon_2_icon-icons.com_71856.svg" alt="иконка меню"></button>
      <div class="header__dropdown-content">
        <a class="header__dropdown-link" href="#">Your profile</a>
        <a class="header__dropdown-link" href="#">Settings</a>
        <a class="header__dropdown-link" href="#">Sign out</a>
      </div>
    </div>

  </header>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CustomHeader"
}
</script>

<style scoped>

  @import "@/pages/styles/header.css";

</style>