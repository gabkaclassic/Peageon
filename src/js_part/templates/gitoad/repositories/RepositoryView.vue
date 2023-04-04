<template>

    <div class="table__column" >
        <a class="table__rep-name" :href="repository.url">{{ repository.name }}</a>
        <p class="table__rep-description"> {{ repository.description }} </p>
    </div>
    <div class="table__block-active"> {{ repository.isPrivate ? 'Private' : 'Public' }} </div>
    <div class="table__lang-block" v-if="repository.language !== null && repository.language.length > 0">
        <div class="table__lang-row">
            <div :class='"table__circle" + " " + languageClass()'></div>
            <div class="table__main-lang"> {{ repository.language }} </div>
        </div>

    </div>
</template>

<script>

export default {
  name: "RepositoryView",
  data() {
    return {
    }
  },
  props: {
    repository: {
      type: Object,
        required: true
    }
  },
  methods: {
      languageClass() {
          let language = this.repository.language
          language = language === null ? '' : language.toUpperCase()

          switch (language) {
              case "HTML":
                  return "table__circle_color_yellow"
              case "CSS":
                  return "table__circle_color_yellow"
              case "C#":
                  return "table__circle_color_purple"
              case "JAVA":
                  return "table__circle_color_orange"
              case "KOTLIN":
                  return "table__circle_color_orange"
              case "PYTHON":
                  return "table__circle_color_blue"
              case "C":
                  return "table__circle_color_black"
              case "C++":
                  return "table__circle_color_green"
              default:
                  return "table__circle_color_brown"
          }

      }
  }
}
</script>

<style scoped>
    @import "@/css_part/pages/git-home-page.css";
</style>

