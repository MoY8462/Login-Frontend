import ButtonAtom from  '../components/ButtonAtom.vue'
export default {
  component: {ButtonAtom},
  title: 'Button',
};

const Template = (args) => ({
  components: { ButtonAtom },
  setup() {
    return { args };
  },
  template: '<button-atom buttonText="Boton"><button-atom>',
});
export const Primary = Template.bind({});
Primary.args = {buttonText: 'Nombre',};