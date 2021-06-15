<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 cont">
        <form @submit.prevent="validation">
            <logo-atom text="Valhalla" subindice="0.1" />

            <label class="pt-2" :class="{'warning': !validate}">
                Correo 
                <button id="show-modal" @click="showModal = true" class="boton">
                    <btn v-if="!validate" color="red"/>
                    <btn v-if="validate"/>
                </button> 
            </label>
            <modal v-if="showModal" @close="valores()">
                <h3 slot="header">Correo</h3>
                <h4 slot="body"> 
                    Consta del nombre del usuario y el dominio, unidos por un '@'
                </h4>
            </modal>
            <input
                class="p-2"
                :class="{'warn': !validate }"
                v-model="user.email"
                type="email"
            />
            <label class="pt-2" :class="{'warning': !validate}">
                Contraseña
                <button id="show-modal-pass" type="button" @click="showModalPass = true" class="boton">
                    <btn v-if="!validate" color="red"/>
                    <btn v-if="validate"/>
                </button> 
            </label>
            <modal v-if="showModalPass" @close="valores()">
                <h3 slot="header">Contraseña</h3>
                <h4 slot="body"> 
                    <li>Minimo 8 caracteres y máximo 15</li>
                    <li>Al menos una letra mayúscula</li>
                    <li>Al menos una letra minucula</li>
                    <li>No espacios en blanco</li>
                    <li>Al menos 1 caracter especial</li>
                </h4>
            </modal>
            <input
                class="p-2"
                :class="{'warn': !validate}"
                v-model="user.password"
                type="email"
            />
            <!--
            <input-text-atom type="password" label="Contraseña" v-model="user.password" :warn=validate />-->
            <div class="subcol pb-3">
                <router-link to="/forgot" class="subrayado">Recuperar Contraseña</router-link>
                <button-atom buttonText="Ingresar" type="submit" class="btn short" />
            </div>
            <line-atom/>
            <button v-on:click="loginGoogle" class="btn large mt-6 lg:mt-5">Ingresar con Google</button>
            <div class="sub mt-4">
                <unica/>
                <fi/>
            </div>
        </form>
        <div class="flex hero">
            <div class="hidden lg:block" >
                <hero-atom />
            </div>
        </div>
        
    </div>
    
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue';
import LogoAtom from '../components/LogoAtom';
import HeroAtom from '@/components/HeroAtom.vue';
import Fi from '@/components/FI_Logo.vue';
import Modal from '@/components/Modal.vue';
import Btn from '@/components/BtnIcon.vue';
import Unica from '@/components/UNICA_Logo.vue';
import LineAtom from '@/components/LineAtom.vue';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
export default ({
    components: { 
        ButtonAtom,
        LogoAtom, 
        HeroAtom,
        Fi,
        Unica,
        LineAtom,
        Modal,
        Btn
    },
    data () {
        return {
            user: {
                email: '',
                password: '',
            },
            errors: [],
            validate: true,
            showModal: false,
            showModalPass: false
        }
    },
    
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => this.$router.replace('dashboard')  , (error) => {
                        alert("Usuario no encontrado"),
                        this.validate = false
                    },);  
        },
        loginGoogle () {
            var provider = new firebase.auth.GoogleAuthProvider();
            this.validate = true;
            firebase.auth()
                .signInWithPopup(provider)
                .then(() => this.$router.replace('dashboard')  , (error) => console.error(error));
            
        },
        validation () {
            this.errors = [];
            console.log("Validar")
            if (!this.user.email) {
                this.errors.push('El correo electrónico es obligatorio.');
                console.log("email1");
                this.validate = false;
            } else if (!this.validEmail(this.user.email)) {
                this.errors.push('El correo electrónico debe ser válido.');
                this.validate = false;
                console.log("email2");
            }
            if (!this.user.password) {
                this.errors.push('La contraseña es obligatorio.');
                this.validate = false;
                console.log("pass1");
            } else if (!this.validPassword(this.user.password)) {
                this.errors.push('La contraseña debe ser válida.');
                this.validate = false;
                console.log("pass2");
            }
            if (!this.errors.length) {
                this.validate = true;
                console.log("OK");
                this.login();
            }
        },
        validPassword: function (pass) {
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/; 
            return re.test(pass);
        },
        validEmail: function (email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            return re.test(email);
        },
        valores: function () {
            this.validate = true;
            this.showModal = false;
            this.showModalPass = false;
        }
    }

})
</script>
<style lang="scss" scoped>
    
    .hero {
        display: grid;
        grid-column: span 2 / span 2;
    }
    form {
        background-color: #F7F9FB;
        padding: 5rem 4rem 4rem 3rem;
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
    
    
    .sub {
        @include number_colums (2,1fr);
        @include alig_elements (center,none,row);
        place-content: center;
        padding-top: 2rem;
        }
    
    
    
    .subrayado {
        text-decoration-line: underline;
    }
  
</style>