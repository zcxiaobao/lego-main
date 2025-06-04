<template>
    <a-layout>
        <a-layout-header class="header">

        </a-layout-header>
    </a-layout>
    <a-layout>
        <a-layout-sider width="300" style="background: #fff">

        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
            <a-layout-content class="preview-container">
                <a-layout-content class="preview-container">
                    <p>画布区域</p>
                    <history-area></history-area>
                    <div class="preview-list" id="canvas-area">
                        <div class="body-container">
                            <component v-for="item in components" :key="item.id" v-bind="item.props" :is="item.name">
                            </component>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout-content>
        </a-layout>
        <a-layout-sider width="300" style="background: #fff" class="settings-panel">

        </a-layout-sider>
    </a-layout>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store';


const store = useStore<GlobalDataProps>();
const components = computed(() => store.state.editor.components);
console.log(components.value);
// const components = computed(() => editor.value.components);
// const currentElement = computed(() => editor.value.currentElement);
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}

.preview-container {
    padding: 24px;
    margin: 0;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}


.preview-list {
    padding: 0;
    margin: 0;
    min-width: 375px;
    min-height: 200px;
    border: 1px solid #efefef;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    margin-top: 50px;
    max-height: 80vh;
}

.body-container {
    width: 100%;
    height: 100%;
    background-size: cover;
}
</style>