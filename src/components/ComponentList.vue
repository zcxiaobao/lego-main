<template>
    <div class="create-component-list">
        <div v-for="(item, index) in defaultTemplate" :key="`text-${index}`" @click="onItemClick(item)">
            <l-text v-bind="item" />
        </div>
    </div>

</template>
<script setup lang="ts">
import { defaultTemplate } from '../defaultTemplate';

const emit = defineEmits(['addItem'])

const onItemClick = (item: Record<string, unknown>) => {
    emit('addItem', item)
}
</script>

<style scoped>
.component-wrapper {
    width: 100px;
    position: relative;
    display: flex;
    align-items: center;
}

.tip-text {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: -10px;
}

.inside-component {
    width: 100px !important;
}

.image-list {
    display: flex;
    flex-wrap: wrap;
    width: 220px;
    margin: 20px auto;
}

.image-list img {
    max-height: 150px;
    object-fit: contain;
}

.item-image {
    margin-right: 10px;
}

.component-item {
    margin-bottom: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
}

.create-component-list .uploader-container {
    padding: 10px;
    color: #ffffff;
    background: #1890ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.create-component-list .uploader-container:hover {
    background: #40a9ff;
}

.create-component-list .uploader-container h4 {
    color: #ffffff;
    margin-bottom: 0;
    margin-left: 10px;
}

.create-component-list .ant-tabs-tab {
    margin: 0;
}
</style>