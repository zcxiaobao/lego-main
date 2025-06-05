import { without, pick } from 'lodash';
import { textDefaultProps } from '../defaultProps';
import { TextProps } from '../types/props';
export const defaultStyles = without(
  Object.keys(textDefaultProps),
  'text',
  'url',
  'actionType',
);
const useStylePick = (
  props: Readonly<Partial<TextProps>>,
  pickStyles: string[] = defaultStyles,
) => {
  return computed(() => pick(props, pickStyles));
};

export default useStylePick;
