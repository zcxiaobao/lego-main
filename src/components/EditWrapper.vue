<template>
  <div class="edit-wrapper" @click="itemClick(props.id)" :class="{ active: active }" :style="styleProps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import useStylePick from '../hooks/useStylePick'
const props = defineProps<{
  id: string,
  active: boolean,
  props: object
}>()
const emits = defineEmits(['set-active'])
const itemClick = (id: string) => {
  emits('set-active', id)
}

const styleProps = useStylePick(props.props || {}, ['position', 'left', 'top', 'width', 'height']) as any
</script>

<style scoped>
.edit-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}

.edit-wrapper:hover {
  border: 1px dashed #ccc;
}

.edit-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}

.edit-wrapper .l-text-component,
.edit-wrapper .l-image-component,
.edit-wrapper .l-shape-component {
  position: static !important;
}

.edit-wrapper.active .resizers .resizer {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /*magic to turn square into circle*/
  background: white;
  border: 3px solid #1890ff;
  position: absolute;
  display: block;
}

.edit-wrapper .resizers .resizer.top-left {
  left: -5px;
  top: -5px;
  cursor: nwse-resize;
  /*resizer cursor*/
}

.edit-wrapper .resizers .resizer.top-right {
  right: -5px;
  top: -5px;
  cursor: nesw-resize;
}

.edit-wrapper .resizers .resizer.bottom-left {
  left: -5px;
  bottom: -5px;
  cursor: nesw-resize;
}

.edit-wrapper .resizers .resizer.bottom-right {
  right: -5px;
  bottom: -5px;
  cursor: nwse-resize;
}
</style>