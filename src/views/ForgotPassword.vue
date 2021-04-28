<template lang='pug'>
    div(class="col")
        form
            logo-atom(text="Valhalla" subindice="0.1")
            input-text-atom(type="text" label="Correo" v-model="email")
            button-atom(buttonText="Enviar" class="btn" type="submit")

        hero-atom(class="hero")
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue'
import InputTextAtom from '@/components/InputTextAtom.vue'
import LogoAtom from '../components/LogoAtom'
import HeroAtom from '@/components/HeroAtom.vue'

export default ({
    components: { 
        ButtonAtom,
        InputTextAtom, 
        LogoAtom, 
        HeroAtom
    },
    data () {
        return {
            email: ''
        }
    }
})
</script>
<style lang="scss" scoped>
    .col {
        @include number_colums (3,1fr);
    }
    div {
        
        padding: 0px;
        margin: 0px;
    }
    form {
        padding: 0.5rem;
    }
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
    }
    .btn {
        
        margin-top: 1rem;
    }
</style>