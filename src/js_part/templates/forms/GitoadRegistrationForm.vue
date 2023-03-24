<template>

  <AbstractForm
      :method="properties.method"
      :sign-header="properties.signHeader"
      :sign-button="properties.signButton"
      :link="properties.link"
      :signLink="properties.signLink"
      @referer="referer"
      @submit.prevent="signUp"
  >

    <div class="input-form">
      <input
          type="text"
          v-model.trim="form.login"
          placeholder="Login"
          :class= "`input-form__login ${v$.form.login.$dirty && v$.form.login.$error ? 'input-form_station_error' : ''}`"
          name="login"
      >
      <forms-errors
          v-show="v$.form.login.$dirty && v$.form.login.$error"
          :errors="v$.form.login.$errors"
      />
    </div>

    <div class="input-form">
      <input
          type="password"
          v-model.trim=form.password placeholder="Password"
          :class= "`input-form__password ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
          name="password">
      <forms-errors
          v-show="v$.form.password.$dirty && v$.form.password.$error"
          :errors="v$.form.password.$errors"
      />
    </div>

    <div class="input-form">
      <input
          type="text"
          v-model.trim=form.jwt placeholder="JWT"
          :class= "`input-form__login ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
          name="jwt"
      >
      <forms-errors
          v-show="v$.form.confirmPassword.$dirty && v$.form.confirmPassword.$error"
          :errors="v$.form.confirmPassword.$errors"
      />

      <div class="input-form">
        <input
            type="text"
            v-model.trim=form.jwt placeholder="Installation token"
            :class= "`input-form__login ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
            name="installationToken"
        >
        <forms-errors
            v-show="v$.form.confirmPassword.$dirty && v$.form.confirmPassword.$error"
            :errors="v$.form.confirmPassword.$errors"
        />

        <div class="input-form">
          <input
              type="text"
              v-model.trim=form.jwt placeholder="Oauth token"
              :class= "`input-form__login ${v$.form.password.$dirty && v$.form.password.$error ? 'input-form_station_error' : ''}`"
              name="oauth"
          >
          <forms-errors
              v-show="v$.form.confirmPassword.$dirty && v$.form.confirmPassword.$error"
              :errors="v$.form.confirmPassword.$errors"
          />

    </div>
    <forms-violations
        v-show="!violations.empty"
        :violations="violations"
    />
  </AbstractForm>


</template>

<script>
export default {
  name: "GitoadRegistrationForm"
}
</script>

<style scoped>

</style>