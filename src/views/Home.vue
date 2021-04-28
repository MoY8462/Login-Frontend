<template lang='pug'>
  div(class="container-fluid")
      h1 ¡Bienvenido a Valhalla!
      logo-atom
      h3 Accede a tu app
      router-link(to="/login" v-if="!loggedIn") Ingresar
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
      @include alig_elements (center,center,column);
      @include number_colums (1, 1fr);
  }
  h1,h3 {
    padding: 0px;
    margin: 0px;
    text-align: center;
  }
</style>
