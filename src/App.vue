<template>

    <custom-header />

    <router-view></router-view>

</template>

<script>

import CustomHeader from "@/js_part/view/templates/CustomHeader.vue";

export default {
    components: {CustomHeader}
}
</script>

<style>

</style>