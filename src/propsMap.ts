import { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface';

interface PropsDetailType {
  component: string;
  valueProp: string;
  eventName: string;
  initialTransform: (v: any) => any;
  afterTransform: (v: any) => any;
  text?: string;
  extraProps?: Record<string, unknown>;
  extraEvent?: string;
  subComponent?: string;
  options?: { text: string | VNode; value: any }[];
  parent?: string;
}

interface MapTypes {
  [key: string]: PropsDetailType;
}

const defaultMap = {
  component: 'a-text',
  eventName: 'change',
  valueProp: 'value',
  initialTransform: (v: unknown) => v,
  afterTransform: (v: unknown) => v,
};

const numberToPxHandle = {
  ...defaultMap,
  component: 'a-input-number',
  initialTransform: (v: string) => (v ? parseInt(v) : 0),
  afterTransform: (e: number) => (e ? `${e}px` : '0'),
};

export const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiti"' },
  { text: '仿宋', value: '"FangSong","STFangsong"' },
  { text: 'Arial', value: '"Arial", sans-serif' },
  { text: 'Arial Black', value: '"Arial Black", sans-serif' },
  { text: 'Comic Sans MS', value: '"Comic Sans MS"' },
  { text: 'Courier New', value: '"Courier New", monospace' },
  { text: 'Georgia', value: '"Georgia", serif' },
  { text: 'Times New Roman', value: '"Times New Roman", serif' },
];

const fontWeightArr = [
  { text: 'thin', value: 100 },
  { text: 'extraLight', value: 200 },
  { text: 'light', value: 300 },
  { text: 'normal', value: 400 },
  { text: 'medium', value: 500 },
  { text: 'semibold', value: 600 },
  { text: 'bold', value: 700 },
  { text: 'extraBold', value: 800 },
  { text: 'black', value: 900 },
];

export const fontFamilyOptions = fontFamilyArr.map((font) => ({
  text: h('span', { style: { fontFamily: font.value } }, font.text),
  value: font.value,
}));
export const mapPropsToComponents: MapTypes = {
  text: {
    ...defaultMap,
    text: '文本',
    component: 'a-textarea',
    valueProp: 'value',
    eventName: 'change',
    extraProps: { autoSize: { minRows: 2, maxRows: 5 } },
    afterTransform: (e: ChangeEvent) => e.target?.value,
  },
  fontSize: {
    ...numberToPxHandle,
    text: '字号',
    extraProps: { addonAfter: 'px' },
  },
  fontWeight: {
    ...defaultMap,
    component: 'a-select',
    subComponent: 'a-select-option',
    options: fontWeightArr,
    text: '字重',
  },
  textAlign: {
    ...defaultMap,
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      { text: '左对齐', value: 'left' },
      { text: '居中', value: 'center' },
      { text: '右对齐', value: 'right' },
    ],
    extraProps: { size: 'small' },
    afterTransform: (e: ChangeEvent) => e.target.value,
  },
  opacity: {
    ...defaultMap,
    text: '透明度',
    component: 'a-slider',
    initialTransform: (v: number) => (v ? v * 100 : 100),
    afterTransform: (e: number) => (e ? e / 100 : 1),
    extraProps: { min: 0, max: 100, step: 1, reverse: true },
  },
  color: {
    ...defaultMap,
    text: '颜色',
    component: 'color-picker',
  },
  borderStyle: {
    ...defaultMap,
    text: '边框样式',
    component: 'a-select',
    subComponent: 'a-select-option',
    options: [
      { text: '实线', value: 'solid' },
      { text: '虚线', value: 'dashed' },
      { text: '点线', value: 'dotted' },
      { text: '双线', value: 'double' },
      { text: '无', value: 'none' },
    ],
  },
  position: {
    ...defaultMap,
    text: '位置',
    component: 'a-select',
    subComponent: 'a-select-option',
    options: [
      { text: '默认', value: '' },
      { text: '绝对定位', value: 'absolute' },
      { text: '相对定位', value: 'relative' },
      { text: 'fixed', value: 'fixed' },
    ],
  },
  left: {
    ...numberToPxHandle,
    text: 'X轴坐标',
    extraProps: { addonAfter: 'px' },
  },
  top: {
    ...numberToPxHandle,
    text: 'Y轴坐标',
    extraProps: { addonAfter: 'px' },
  },
  width: {
    ...numberToPxHandle,
    text: '宽度',
    extraProps: { addonAfter: 'px' },
  },
};
