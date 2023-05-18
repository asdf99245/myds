import { ElementType, ReactElement, forwardRef } from 'react';
import { EmptyProps, PolymorphicPropsWithRef, PolymorphicRef } from '@utils/type.util';

type Props<T extends ElementType> = PolymorphicPropsWithRef<EmptyProps, T>;

type BoxComponent = <T extends ElementType = 'div'>(props: Props<T>) => ReactElement | null;

const Box: BoxComponent = forwardRef(function Box<T extends ElementType = 'div'>(
  { as, children, ...props }: Props<T>,
  ref: PolymorphicRef<T>,
) {
  const Component = as || 'div';

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default Box;
