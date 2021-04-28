<template>
  <button type="button" name="button">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'ButtonAtom',
    props: {
      buttonText: { type : String, default:""}
    }
}
</script>

<style scoped lang="scss">
  button {
    @include button_style;
  }
  button:hover {
  background-color: $hover; /* Green */
  color: white;
  }
</style>