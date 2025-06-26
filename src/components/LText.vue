<template>
    <component :is="props.tag" :style="styleProps" class="l-text-component" @click="handleClick">
        {{ props.text }}
    </component>
</template>
<script setup lang="ts">
import useStylePick from '../hooks/useStylePick'
import useComponentClick from '../hooks/useComponentClick'

import { without } from 'lodash'
import { textDefaultProps } from '../defaultProps'
import type { TextProps } from '../types/props'


const props = withDefaults(
    defineProps<Partial<TextProps & { tag: string }>>(),
    {
        tag: 'div',
        ...textDefaultProps,
    },
)

const { handleClick } = useComponentClick(props)


const styleProps = useStylePick(props, without(Object.keys(props), 'height', 'position', 'left', 'top', 'width'))
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
    position: relative !important;
}
</style>