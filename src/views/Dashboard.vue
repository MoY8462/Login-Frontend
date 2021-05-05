<template lang='pug'>
  div
    h2 Cargando
    logo-atom
    a( @click="logout") Salir
</template>
<script>
import LogoAtom from '../components/LogoAtom'
import ButtonAtom from '@/components/ButtonAtom.vue';
import firebase from 'firebase'
export default {
  components: {
      LogoAtom,
      ButtonAtom
    },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => this.$router.replace('login'));
    }
  }
}
</script>
<style scoped lang="scss">
div {
  @include number_colums (1, 1fr);
  @include alig_elements (center,center,column)
}
</style>