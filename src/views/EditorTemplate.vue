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
                                :id="component.id" :active="component.id === currentElement?.id"
                                :props="component.props">
                                <component v-bind="component.props" :is="component.name"></component>
                            </edit-wrapper>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout-content>
        </a-layout>
        <a-layout-sider width="300" style="background: #fff" class="settings-panel">
            组件属性

            <div class="page-settings">
                <props-table v-if="currentElement" :props="currentElement.props" />
            </div>
        </a-layout-sider>
    </a-layout>
</template>
<script setup lang="ts">
import PropsTable from '@/components/PropsTable.vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store';
import { TextProps, ComponentData } from '../types/props';

const store = useStore<GlobalDataProps>();
const components = computed(() => store.state.editor.components);
const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement);

const addComponent = (item: Readonly<Partial<TextProps>>) => {
    store.commit('addComponent', item)
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

.header .logo-img {
    margin-right: 20px;
    height: 40px;
}

.page-title {
    display: flex;
}

.header h4 {
    color: #ffffff;
}

.editor-spinner {
    position: fixed;
    right: 50%;
    top: 10px;
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

.preview-list.active {
    border: 1px solid #1890ff;
}

.preview-list.canvas-fix .l-text-component,
.preview-list.canvas-fix .l-image-component,
.preview-list.canvas-fix .l-shape-component {
    box-shadow: none !important;
}

.preview-list.canvas-fix {
    position: absolute;
    max-height: none;
}

.sidebar-container {
    padding: 20px;
}

.body-container {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.page-settings {
    padding: 16px;
}

.settings-panel .ant-tabs-top-content {
    max-height: calc(100vh - 68px - 56px);
    overflow-y: auto;
}

.final-preview {
    position: absolute;
    width: calc(100% - 400px);
    height: 100%;
    background: transparent;
    top: 0;
    left: 0;
    z-index: 1500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.final-preview-inner {
    width: 430px;
    height: 870px;
    padding: 60px 28px;
    position: relative;
    /* background: url('~@/assets/phone-back.png') no-repeat; */
    background-size: cover;
}

.final-preview-inner .preview-title {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-weight: bold;
}

.iframe-container {
    width: 100%;
    height: 706px;
    overflow-y: auto;
    overflow-x: hidden;
}

.iframe-placeholder {
    /* background: url('~@/assets/loading.svg') 50% 50% no-repeat; */
    background-size: 50px;
}

.settings-panel .ant-list-bordered {
    border-radius: 0;
}

.settings-panel .ant-collapse {
    border-radius: 0;
}

.ant-collapse-header,
.ant-collapse-item {
    border-radius: 0 !important;
}

.settings-panel .ant-tabs-tab {
    border-radius: 0 !important;
}
</style>