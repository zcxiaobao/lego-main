import { v4 as uuidv4 } from 'uuid';
import { Module } from 'vuex';
import { GlobalDataProps } from './index';

// 组件信息
interface ComponentData {
  props: { [key: string]: unknown };
  id: string; // 组件id，独一无二，通过 uuid 生成
  name: string; // 组件名称
  isLocked?: boolean; // 是否锁定
}

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
    },
  },
];

export const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
};
