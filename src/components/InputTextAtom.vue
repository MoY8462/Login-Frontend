<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        title: { type : String, default:""},
        label: { type : String, default:""}
    }
};
</script>

<style scope lang="scss">
    div {
        display: grid;
        grid-template-columns: auto;
        padding: 2rem 2rem;
        font-family: $font;
    }
    input {
        padding: 0.5rem;
        font-family: $font;
    }
</style>