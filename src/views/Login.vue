<template lang='pug'>
    div(class="col")
        form(@submit.prevent="login")
            logo-atom(text="Valhalla" subindice="0.1")
            input-text-atom(type="text", label="Correo", v-model="email")
            
            input-text-atom(type="password", label="Contraseña", v-model="password")

            p {{ error }}
            div(class="subcol")
                router-link(to="/forgot") Recuperar Contraseña
                button-atom(buttonText="Entrar" type="submit")
        
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
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {
            this.$store
                .dispatch('login', {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({name: 'dashboard'})
                })
                .catch(err => {
                this.error = err.response.data.error
        })
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
    div {
        padding: 0px;
        margin: 0px;
    }
    form {
        padding: 1rem;
    }
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
    }
</style>