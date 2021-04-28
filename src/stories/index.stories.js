import ButtonAtom from  '../components/ButtonAtom.vue'

export default {
  title: 'Button',
}

export const AtomButton = () => ({
  components: { ButtonAtom },
  template: '<button-atom buttonText="Botón"></button-atom>',
  
})
/*
export const withSomeEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})
*/