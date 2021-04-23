<template>
  <button type="button" name="button">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'ButtonAtom',
    props: {
      buttonText: String
    }
}
</script>

<style scoped lang="scss">
  button {
    background-color: $green;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 0.5rem 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-family: $font;
    transition-duration: 0.2s;
  }
  button:hover {
  background-color: #52B388; /* Green */
  color: white;
  }
</style>