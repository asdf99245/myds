import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react';

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

type ComponentType = <T extends ElementType = 'div'>(
  props: Props<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  },
) => ReactElement | null;

const Box: ComponentType = forwardRef(function Box<T extends ElementType = 'div'>(
  { as, children, ...props }: Props<T>,
  ref: ComponentPropsWithRef<T>['ref'],
) {
  const Component = as || 'div';

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default Box;
