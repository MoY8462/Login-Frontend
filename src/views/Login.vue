<template lang='pug'>
    div(class="col flex items-start")
        form(@submit.prevent="login")
            logo-atom(text="Valhalla" subindice="0.1" )
            input-text-atom(type="text", label="Correo", v-model="email" )
            
            input-text-atom(type="password", label="Contraseña", v-model="password")

            div(class="subcol pb-4")
                router-link(to="/forgot" class="subrayado") Recuperar Contraseña
                button-atom(buttonText="Ingresar" type="submit" )
            
            line-atom
            button(buttonText="Ingresar con Google" @click="loginGoogle" class="button mt-5") Ingresar con Google
            
            
            div(class="sub mt-8")
                unica
                fi 
        hero-atom(class="hero pt-4 mt-2")
    
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue';
import InputTextAtom from '@/components/InputTextAtom.vue';
import LogoAtom from '../components/LogoAtom';
import HeroAtom from '@/components/HeroAtom.vue';
import Fi from '@/components/FI_Logo.vue';
import Unica from '@/components/UNICA_Logo.vue';
import LineAtom from '@/components/LineAtom.vue';
import firebase from 'firebase';
export default ({
    components: { 
        ButtonAtom,
        InputTextAtom, 
        LogoAtom, 
        HeroAtom,
        Fi,
        Unica,
        LineAtom
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
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
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
    .subcol {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: space-between;
        margin-top: 1rem;
        }
    button {
    @include button_style;
    }
    
    
    .sub {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: center;
        padding-top: 2rem;
        }
    
    
    button:hover {
    background-color: $hover; 
    color: white;
    }
    .subrayado {
        text-decoration-line: underline;
    }
  
</style>