<template>
    <div class="props-table">
        <div v-for="(value, key) in finalProps" :key="key" :id="`item-${value.key}`" class="prop-item">
            <span class="label" v-if="value.text">{{ value.text }}</span>
            <div :class="`prop-component component-${value.component}`">
                <component v-if="!value.options" :is="value.component" v-bind="value.extraProps"
                    :[value.valueProp]="value.value" v-on="value.events" />
                <component v-else :is="value.component" v-bind="value.extraProps" :[value.valueProp]="value.value"
                    v-on="value.events">
                    <component :is="value.subComponent" v-for="(option, k) in value.options" :key="k"
                        :value="option.value">{{ option.text }}
                    </component>
                </component>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { mapPropsToComponents } from '../propsMap'
import { useStore } from 'vuex'

const { commit } = useStore()
import { map } from 'lodash'

const props = defineProps({
    props: {
        type: Object,
        required: true
    },
})
const handleCommit = (data: any) => {
    commit('updateComponent', data)
}
const finalProps = computed(() =>
    map(props.props, (value, key) => {
        if (!mapPropsToComponents[key]) return {}
        const {
            component, initialTransform, afterTransform,
            eventName, text, valueProp, options, subComponent, extraProps = {}, parent, extraEvent
        } = mapPropsToComponents[key]
        let isHidden = false
        if (parent) {
            isHidden = !props.props[parent]
        }
        return {
            key,
            component,
            text,
            valueProp,
            isHidden,
            value: initialTransform(value),
            extraProps,
            events: {
                [eventName]: (e: any) => { handleCommit({ value: afterTransform(e), key }) },
            },
            options,
            subComponent
        }
    })
)
</script>
<style>
.prop-item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
}

.hide-item {
    display: none;
}

.label {
    width: 28%;
}

.prop-item.no-text {
    display: inline-block;
    margin: 0 10px 0 0;
}

/* #item-fontWeight {
    margin-left: 28%;
} */

.prop-component {
    width: 70%;
}

/* .component-a-slider {
  width: 80%;
} */
.component-a-select .ant-select {
    width: 150px;
}

.prop-component.component-shadow-picker,
.prop-component.component-image-processer,
.prop-component.component-background-processer {
    width: 100%;
}

#item-backgroundImage {
    width: 100%;
    cursor: pointer;
    margin-bottom: 15px;
}

#item-backgroundImage .styled-upload-component .uploader-container {
    min-height: 200px;
}
</style>