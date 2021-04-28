import InputTextAtom from '../components/InputTextAtom.vue'

export default {
    title: 'Input'
}

export const AtomInput = () => ({
    components: { InputTextAtom },
    template: '<input-text-atom type="text" label="Etiqueta" v-model="value" />',
  })