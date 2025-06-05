import { v4 as uuidv4 } from 'uuid';
import { Module } from 'vuex';
import { GlobalDataProps } from './index';
import { CommonProps, ComponentData } from '../types/props';

// 组件信息

export interface EditorProps {
  components: ComponentData[];
  currentElement: string;
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello1',
      fontSize: '12px',
      color: '#000',
      textAlign: 'center',
    },
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello2',
      fontSize: '14px',
      color: '#00f',
      textAlign: 'center',
    },
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello3',
      fontSize: '16px',
      color: 'red',
      textAlign: 'center',
      fontWeight: 'bold',
      actionType: 'url',
      url: 'https://www.baidu.com',
    },
  },
];

export const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
  mutations: {
    addComponent(state, props: Readonly<Partial<CommonProps>>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props: props,
      };
      state.components.push(newComponent);
    },
    setActive(state, currentId: string) {
      state.currentElement = currentId;
    },
  },
  getters: {
    getCurrentElement(state) {
      return state.components.find(
        (component) => component.id === state.currentElement,
      );
    },
  },
};
