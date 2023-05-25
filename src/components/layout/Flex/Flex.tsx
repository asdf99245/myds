import { CSSProperties, ElementType, ReactElement, forwardRef } from 'react';
import { PolymorphicPropsWithRef, PolymorphicRef } from '@utils/type.util';

interface FlexProps {
  inline?: boolean;
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  justifyContent?: CSSProperties['justifyContent'];
}

type Props<T extends ElementType> = PolymorphicPropsWithRef<FlexProps, T>;

type FlexComponent = <T extends ElementType = DefaultElement>(props: { css: number } & Props<T>) => ReactElement | null;

const DEFAULT_ELEMENT = 'div';
type DefaultElement = typeof DEFAULT_ELEMENT;

const Flex: FlexComponent = forwardRef(function Flex<T extends ElementType = DefaultElement>(
  { as, children, ...props }: Props<T>,
  ref: PolymorphicRef<T>,
) {
  const Component = as || DEFAULT_ELEMENT;

  // TODO: Component에 emotion css를 전달할 방법을 고려해봐야 함. 타입을 어떻게 잡지?
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

// function Flex({ children, ...props }: Props) {
//   return <div css={flexStyle(props)}>{children}</div>;
// }

export default Flex;

// const flexStyle = ({
//   inline = false,
//   flexDirection,
//   flexWrap,
//   alignItems,
//   alignContent,
//   justifyContent,
// }: Omit<Props, 'children'> = {}) => {
//   return {
//     display: inline ? 'inline-flex' : 'flex',
//     flexDirection,
//     flexWrap,
//     alignItems,
//     alignContent,
//     justifyContent,
//   };
// };
