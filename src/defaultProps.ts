import { mapValues, without } from 'lodash';
import { CommonProps, TextProps } from './types/props';

// 通用属性，所有的组件元素共享
export const commonDefaultProps: CommonProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
};

// 文本组件的默认属性
export const textDefaultProps: TextProps = {
  // basic props - font styles
  text: 'hello',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 400,
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
  width: '318px',
};

export const transformToComponentProps = (props: TextProps) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item,
    };
  });
};

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'text',
  'url',
  'actionType',
);
