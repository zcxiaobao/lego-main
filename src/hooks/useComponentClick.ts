import { CommonProps } from '../types/props';

const useComponentClick = (props: Readonly<Partial<CommonProps>>) => {
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url;
    }
  };
  return {
    handleClick,
  };
};
export default useComponentClick;
