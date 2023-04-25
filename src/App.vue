<template>

    <custom-header />

    <router-view />


</template>

<script>

import CustomHeader from "@/js_part/web/view/templates/CustomHeader.vue";

export default {
    components: {CustomHeader}
}
</script>

<style>

</style>