<template lang='pug'>
    div(class="col flex items-start")
        form(@submit.prevent="restauracion")
            logo-atom(text="Valhalla" subindice="0.1")
            input-text-atom(type="text" label="Correo" v-model="email")
            div(class="subcol mt-2")
                router-link(to="/login" class="subrayado") Ingresar
                button-atom(buttonText="Enviar" type="submit")
            div(class="sub mt-56")
                unica
                fi 
        hero-atom(class="hero pt-4 mt-2")
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue'
import InputTextAtom from '@/components/InputTextAtom.vue'
import LogoAtom from '../components/LogoAtom'
import HeroAtom from '@/components/HeroAtom.vue'
import Fi from '@/components/FI_Logo.vue';
import Unica from '@/components/UNICA_Logo.vue';
import firebase from 'firebase'
export default ({
    components: { 
        ButtonAtom,
        InputTextAtom, 
        LogoAtom, 
        HeroAtom,
        Fi,
        Unica
    },
    data () {
        return {
            email: ''
        }
    },
    methods: {
        restauracion() {
            var auth = firebase.auth();

            auth.sendPasswordResetEmail(this.email).then(function() {
            alert('Correo Enviado')
            }).catch(function() {
            // An error happened.
            });
        }
    }
})
</script>
<style lang="scss" scoped>
    .col {
        @include number_colums (3,1fr);
    }
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
    }
    .btn {
        
        margin-top: 1rem;
    }
    .subcol {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: space-around;
        }
    .sub {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: center;
        padding-top: 2rem;
        }
    form {
        background-color: #F7F9FB;
        padding-top: 4rem;
        padding-right: 3rem;
        padding-left: 3rem;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .subrayado {
        text-decoration-line: underline;
    }
</style>