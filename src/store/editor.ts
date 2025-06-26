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
      fontWeight: 400,
      textAlign: 'center',
      opacity: 1,
      position: 'absolute',
      left: '100px',
      top: '100px',
      width: '100px',
    },
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello2',
      fontSize: '14px',
      color: '#00f',
      fontWeight: 500,
      textAlign: 'center',
      opacity: 0.5,
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
      fontWeight: 700,
      actionType: 'url',
      url: 'https://www.baidu.com',
      opacity: 0.8,
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
    updateComponent(state, { key, value }: Readonly<Partial<CommonProps>>) {
      const component = state.components.find(
        (component) => component.id === state.currentElement,
      );
      if (component) {
        component.props[key] = value;
      }
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
