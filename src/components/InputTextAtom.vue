<template>
    <div class="py-3">
        <label v-if="label">{{ label }}</label>
        <input
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            class="p-2"
            
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: { type : String, default:""}
    }
};
</script>

<style scope lang="scss">
    div {
        display: grid;
        grid-template-columns: auto;
        font-family: $font;
    }
    input {
        padding: 2rem;
        font-family: $font;
    }
</style>