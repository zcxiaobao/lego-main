<template>
    <component :is="props.tag" :style="styleProps" class="l-text-component">
        {{ props.text }}
    </component>
</template>
<script setup lang="ts">
import { pick } from 'lodash'
interface TextProps {
    text: string,
    fontSize: string,
    color: string,
    tag: string,
    textAlign: string,
}
const props = withDefaults(defineProps<TextProps>(), {
    text: 'hello',
    fontSize: '16px',
    color: '#000',
    tag: 'div',
    textAlign: 'center',
})

const styleProps = computed(() => pick(props, ['fontSize', 'textAlign', 'color']))
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
    margin-bottom: 0;
}

button.l-text-component {
    padding: 5px 10px;
    cursor: pointer;
}

.l-text-component {
    box-sizing: border-box;
    white-space: pre-wrap;
}
</style>