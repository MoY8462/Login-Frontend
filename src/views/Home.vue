<template>
  <div class="container-fluid">
    <h1>¡Bienvenido a Valhalla!</h1>
      <logo-atom></logo-atom>
      <h3>Accede a tu app</h3>
      <router-link to="/login" v-if="!loggedIn">
          Ingresar
      </router-link>
  </div>
</template>

<script>
import { authComputed } from '../store/helpers'
import LogoAtom from '../components/LogoAtom'
export default {
  components: {
    LogoAtom
  },
  computed: {
    ...authComputed
  }
}
</script>
<style scoped lang="scss">
  div {
     display: grid;
      display: flex;
      grid-template-columns: repeat(1, 1fr);
      grid-gap:1rem;
      flex-direction: column;
      align-items:center;
      justify-items: center;
  }
  h1,h3 {
    padding: 0px;
    margin: 0px;
    text-align: center;
  }
</style>
