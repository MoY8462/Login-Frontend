<template lang='pug'>
  div
      h1 ¡Bienvenido a Valhalla!
      logo-atom
      h3 Accede a tu app
      router-link(to="/login") Ingresar
</template>

<script>
import LogoAtom from '../components/LogoAtom'
export default {
  components: {
    LogoAtom
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