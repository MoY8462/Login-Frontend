<template>
  <div id="app">
    <router-link class="button" to="/">
          Home
    </router-link>
    <router-link v-if="!loggedIn" to="/login" class="button">
    Ingresar
    </router-link>
    <!--<button-atom buttonText="Salir" v-else @click="logout" type="button"></button-atom>-->
    <button v-else @click="logout" type="button">Salir</button>
    <router-view/>
  </div>
</template>
<script>
import { authComputed } from './store/helpers'
//import ButtonAtom from '@/components/ButtonAtom.vue'
export default {
  //components: { ButtonAtom},
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
button,
.button {
  margin-left: auto;
  background: rgb(44, 221, 138);
  text-decoration: none;
  color: #2c3e50;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

</style>
