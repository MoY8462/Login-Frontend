<template>
    <div class="contenedor">
        <section class="form__container">
            <form @submit.prevent="validation">
                <logo-atom text="Valhalla" subindice="0.1" />
                <label class="form__container-label" for="">
                    <span :class="{'warning': !validate}">Correo</span>
                    <input
                        class="p-2"
                        :class="{'warn': !validate, 'alive': validate }"
                        v-model="user.email"
                        placeholder="ejemplo@dominio.com"
                        type="email"
                    />
                </label>
                <label class="form__container-password" for="">
                    <div class="password__div">
                        <span class="password__div-title" :class="{'warning': !validate}">Contraseña</span>
                        <span class="password__div-icon">
                            <ul>
                                <li>Debe de contener 8 carácteres</li>
                                <li>Debe contener por lo menos una mayúscula</li>
                            </ul>
                        </span>
                        
                    </div>
                    
                    <div class="label-div" :class="{'warn': !validate, 'alive': validate}">
                        <input
                            class="label-div-input"
                            
                            v-model="user.password"
                            type="password"
                            placeholder="*********"
                            id="password"
                        />
                        <button v-on:click="estado" :class="{'view': !action,'visibility': action}"></button>
                    </div>
                    
                    
                </label>
                
                <section class="form__container-section">
                    <router-link to="/forgot" class="underline">Recuperar Contraseña</router-link>
                    <button-atom buttonText="Ingresar" type="submit" class="btn short" />
                </section>
                <line-atom/>
                <button v-on:click="loginGoogle" class="form__container-button">Ingresar con Google  <span></span></button>
                
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
import ButtonAtom from '@/components/ButtonAtom.vue';
import LogoAtom from '../components/LogoAtom';
import LineAtom from '@/components/LineAtom.vue';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
export default ({
    components: { 
        ButtonAtom,
        LogoAtom, 
        LineAtom,
    },
    data () {
        return {
            user: {
                email: '',
                password: '',
            },
            errors: [],
            validate: true,
            action: false,
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
        },
        estado: function () {
            const passwordField = document.querySelector('#password')
            if (passwordField.getAttribute('type') === 'password') 
            {
                passwordField.setAttribute('type', 'text');
                this.action=true;
            }
            else 
            {
                passwordField.setAttribute('type', 'password');
                this.action=false;
            }
        }
    }

})
</script>
<style>
    
    
  
</style>