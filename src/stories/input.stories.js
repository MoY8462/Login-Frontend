import InputTextAtom from '../components/InputTextAtom.vue'

export default {
    component: {InputTextAtom},
    title: 'Input'
}
  const Template = (args) => ({
    components: { InputTextAtom },
    setup() {
      return { args };
    },
    template: '<input-text-atom type="text" label="Etiqueta" v-model="value" />',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {label: 'Etiqueta',};