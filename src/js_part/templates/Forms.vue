<template>

  <div class="page">

    <div class="form-group"
         v-for="(value, label, ind) in fields"
         :key="ind"
    >
      <label :for="label"> {{ label }} </label>
      <input
        class="form-control"
        :for="label"
        :id="label"
        v-model.trim="fields[label]"
      />

    </div>

    <select
        v-model="selectedUniversities"
        multiple
    >
      <option
          v-for="u in universities"
          :key="u.alias"
          :value="u.title"
          @select="universitiesView(u)"
      >
        {{ u.alias }}
      </option>
    </select>

    <input
      v-model="input.additionalOption"
    />
    <button
      @click="$router.push('/about')"
    >
      Add new university
    </button>

    <div v-if="selectedUniversities.length > 0">
        You selected: {{ selectedUniversities.toString() }}
    </div>

  </div>


</template>

<script>


import { useVuelidate } from '@vuelidate/core'


const emailRe = /\w+@\w+.\w+/
export default {

  setup () {
    return {
      v$: useVuelidate()
    }
  },
  name: "MyComponent",
  data() {
    return {
      fields: {
        firstName: '',
        lastName: '',
      },
      selectedUniversities: [],
      input: {
        additionalOption: ''
      },
      universities: [
        {title: 'Moscow Electronic Technique Institute', alias: "SHARAGA"},
        {title: 'Moscow State Institute', alias: "MGU"},
        {title: 'Moscow Pedagogic Institute', alias: "NONAME"}
      ]
    }
  },
  methods: {
    addField() {
      this.fields[this.additionalOption] = ''
      this.additionalOption = ''
    },
    universitiesView(label) {
      console.log(label)
    }
  },
  watch: {
    selectedUniversities(newValue) {
      console.log(newValue.toString())
    }
  },
  validations: {
    input: {
      additionalOption: {
        emailValidation(value) {
          console.log(emailRe.test(value))
          return emailRe.test(value)
        }
      }
    }

  }
}
</script>

<style scoped>

</style>