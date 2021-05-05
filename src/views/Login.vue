<template lang='pug'>
    div(class="col container")
        form(@submit.prevent="login")
            logo-atom(text="Valhalla" subindice="0.1")
            input-text-atom(type="text", label="Correo", v-model="email")
            
            input-text-atom(type="password", label="Contraseña", v-model="password")

            div(class="subcol")
                router-link(to="/forgot") Recuperar Contraseña
                button-atom(buttonText="   Entrar   " type="submit")

            button(buttonText="Ingresar con Google" @click="loginGoogle" class="button_a") Ingresar con Google
            
            div(class="sub")
                unica
                fi 
        hero-atom(class="hero")
    
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue';
import InputTextAtom from '@/components/InputTextAtom.vue';
import LogoAtom from '../components/LogoAtom';
import HeroAtom from '@/components/HeroAtom.vue';
import Fi from '@/components/FI_Logo.vue';
import Unica from '@/components/UNICA_Logo.vue';
import firebase from 'firebase';
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
            email: '',
            password: ''
        }
    },
    
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => this.$router.replace('dashboard')  , (error) => console.error(error));
                        
        },
        loginGoogle () {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
                .signInWithPopup(provider)
                .then(() => this.$router.replace('dashboard')  , (error) => console.error(error));
        }
    }

})
</script>
<style lang="scss" scoped>
    .col {
        @include number_colums (3,1fr);
        }
    .subcol {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: space-between;
        }
    .sub {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: center;
        padding-top: 2rem;
        }
    form {
        background-color: #F7F9FB;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
    }
    .fullscreen{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    min-height:100%;
    min-width:100%;
    }
    .button_a {
    @include button_style;
    margin-left: 2rem;
    margin-right: 2rem;
    }
    button:hover {
    background-color: $hover; /* Green */
    color: white;
    }
</style>