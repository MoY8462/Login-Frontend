<template>
  <div>
    <form @submit.prevent="login">
        <input-text-atom
            type="text"
            label="Correo"
            v-model="email" />

        <input-text-atom
            type="password"
            label="Contraseña"
            v-model="password" />

        <p>{{ error }}</p>
        
        <button-atom buttonText="Entrar" type="submit"></button-atom>


    </form>
  </div>
</template>

<script>
import ButtonAtom from '@/components/ButtonAtom.vue'
import InputTextAtom from '@/components/InputTextAtom.vue'
export default ({
  components: { ButtonAtom, InputTextAtom},
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
