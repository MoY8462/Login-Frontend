<template>
  <div id="app">
    <router-link class="button" to="/">
          Home
    </router-link>
    <router-link v-if="!loggedIn" to="/login" class="button">
    Ingresar
    </router-link>
    <button v-else @click="logout" type="button">Salir</button>
    <router-view/>
  </div>
</template>
<script>
import { authComputed } from './store/helpers'
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...authComputed
  }
}
</script>

<style scoped lang="scss">
button {
  @include button_style;
}
router-link {
  text-align: center;
    text-decoration: none;
}

</style>
