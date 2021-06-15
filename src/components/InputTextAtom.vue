<template>
    <div class="py-3">
        <label v-if="label" :class="{'warning': !warn}">{{ label }}</label>
        
        <input
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            class="p-2"
            :class="{'warn': !warn}"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: { type : String, default:""},
        warn: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss">
    div {
        display: grid;
        grid-template-columns: auto;
        font-family: 'Inter', sans-serif;
    }
    
    
</style>