<template lang='pug'>
  div
    h2 Cargando
    logo-atom
</template>
<script>
import LogoAtom from '../components/LogoAtom'

export default {
  components: {LogoAtom}
}
</script>
<style scoped lang="scss">
div {
  @include number_colums (1, 1fr);
  @include alig_elements (center,center,column)
}
</style>