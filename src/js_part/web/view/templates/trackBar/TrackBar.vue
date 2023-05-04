<template>
    <section class="track">
            <div v-for="(element, id) in store.getters.track" :key="id" class="track__point">
                <a :href="element.link"> {{ element.text }} </a>
                <img v-if="id !== store.getters.track.length - 1" class="track__icon" src="../../../../../css_part/images/up-arrow_icon-icons.com_73351.svg" alt="arrow">
            </div>

    </section>
</template>
<script>
import store from "@/js_part/data/storages/storages"
export default {
    name: 'track-bar',
    data() {
        return {
            store: store
        }
    },

}
</script>