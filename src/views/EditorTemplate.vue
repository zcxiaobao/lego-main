<template>
    <a-layout>
        <a-layout-header class="header">

        </a-layout-header>
    </a-layout>
    <a-layout>
        <a-layout-sider width="300" style="background: #fff">
            <component-list @addItem="addComponent" />
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
            <a-layout-content class="preview-container">
                <a-layout-content class="preview-container">
                    <p>画布区域</p>
                    <history-area></history-area>
                    <div class="preview-list" id="canvas-area">
                        <div class="body-container">
                            <edit-wrapper v-for="component in components" :key="component.id" @setActive="setActive"
                                :id="component.id" :active="component.id === currentElement?.id">
                                <component v-bind="component.props" :is="component.name"></component>
                            </edit-wrapper>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout-content>
        </a-layout>
        <a-layout-sider width="300" style="background: #fff" class="settings-panel">
            组件属性
            <pre>{{ currentElement?.props }}</pre>
        </a-layout-sider>
    </a-layout>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store';
import { TextProps, ComponentData } from '../types/props';

const store = useStore<GlobalDataProps>();
const components = computed(() => store.state.editor.components);
const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement);

const addComponent = (item: Readonly<Partial<TextProps>>) => {
    store.commit('addComponent', item)
    console.log(components.value, 1111)
}
const setActive = (id: string) => {
    store.commit('setActive', id)
}
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