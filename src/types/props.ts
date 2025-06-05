export interface CommonProps {
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: number;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}

export type TextProps = {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
  width: string;
} & CommonProps;

export interface ComponentData {
  props: Partial<TextProps>;
  id: string; // 组件id，独一无二，通过 uuid 生成
  name: string; // 组件名称
  isLocked?: boolean; // 是否锁定
}
