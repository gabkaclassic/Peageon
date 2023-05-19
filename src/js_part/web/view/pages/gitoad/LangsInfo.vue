<template>
        <div class="info__langs">
            <h4 class="info__title-settings">Languages</h4>
            <div class="info__langs-line">
                <div v-for="(value, key) in langs()"
                     :key="key"
                     class="info__lang"
                     :style="`width:${ getPercents(key) }%; background-color: ${ color(key) };`">

                </div>
            </div>
            <ul class="info__langs-grid">

                    <li class="info__langs-item"
                        v-for="(value, key) in langs()"
                        :key="key">
                        <div class='info__lang-circle' :style="`background-color: ${color(key)};`">

                        </div>
                        {{ key }}<span class="info__span">{{ getPercents(key) }}%</span>
                    </li>
            </ul>
        </div>
</template>
<script>

import {toRaw} from "vue";
import store from "@/js_part/data/storages/storages";

export default {
    name: 'langs-info',
    data() {
      return {
          langs: () => toRaw(this.languages),
          store: store
      }
    },
    props: {
        languages: {
            required: true
        }
    },
    methods: {
          color(string) {

            return `rgba(${200 + string.hashCode()%56}, ${56+string.hashCode()%200}, ${156 + string.hashCode()%100}, ${string.hashCode()%200})`;
        },
        getPercents(key) {
              return Math.round(toRaw(store.getters.langsInfo)[key])
        }
    },
    beforeMount() {
        String.prototype.hashCode = function() {
            var hash = 0,
                i, chr;
            if (this.length === 0) return hash;
            for (i = 0; i < this.length; i++) {
                chr = this.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            return hash;
        }
        let sum = 0
        let langsInfo = []
        for(const [key, value] of Object.entries(this.langs())) {
            sum += value
            key
        }
        for(const [key, value] of Object.entries(this.langs())) {
            langsInfo[key] = 100*value/sum

        }
        this.$gitoadRepositoryMutations.gitoadSetLangsInfo(langsInfo)
    },
    mounted() {
        let sum = 0
        let langsInfo = []
        for(const [key, value] of Object.entries(this.langs())) {
            sum += value
            key
        }
        for(const [key, value] of Object.entries(this.langs())) {
            langsInfo[key] = 100*value/sum

        }
        this.$gitoadRepositoryMutations.gitoadSetLangsInfo(langsInfo)
    }

}
</script>

<style scoped>
    @import "@/css_part/pages/repository.css";
</style>