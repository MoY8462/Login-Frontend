<template>
    <div class="contenedor">
        <section class="form__container">
            <form @submit.prevent="restauracion">
                <logo-atom text="Valhalla" subindice="0.1" />
                <label class="form__container-label" for="">
                    <span :class="{'warning': !validate}">Correo</span>
                    <input
                        class="p-2"
                        :class="{'warn': !validate, 'alive': validate }"
                        v-model="email"
                        placeholder="ejemplo@dominio.com"
                        type="email"
                    />
                </label>
                
                <div class="form__container-div" >
                    <section class="form__container-div-forgot">
                        <router-link to="/login" class="underline">Ingresar </router-link>
                    </section>
                    <section>
                        <button type="submit" class="form__container-button">Enviar </button>
                    </section>
                </div>
                
                
                <div class="form__container-div">
                    <section>
                        <img src="../assets/image3.svg" alt="">
                    </section>
                    <section>
                        <img src="../assets/image2.svg" alt="">
                    </section>
                </div>
            </form>
        </section>
        <div class="img__container">
        </div>
    </div>
</template>

<script>
import LogoAtom from '../components/LogoAtom'
import firebase from 'firebase'
export default ({
    components: { 
        LogoAtom, 
    },
    data () {
        return {
            email: '',
            validate: true,
        }
    },
    methods: {
        restauracion() {
            var auth = firebase.auth();

            auth.sendPasswordResetEmail(this.email).then(function() {
            alert('Correo Enviado')
            }).catch(function() {
                this.validate=false;
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