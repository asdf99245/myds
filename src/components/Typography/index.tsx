import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { useTheme } from '@emotion/react';
import { FontVariant } from '@styles/fonts';

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode;
  variant?: FontVariant;
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
  as?: ElementType;
}

const variantMapping: Record<FontVariant, string> = {
  display: 'h1',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  title: 'h5',
  subTitle: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
} as const;

function Typography({ children, variant = 'body1', fontSize, fontWeight, color, as, ...props }: Props) {
  const Component = as || variantMapping[variant] || 'span';
  const { fonts } = useTheme();

  return (
    <Component
      css={{
        fontFamily: fonts[variant].family,
        fontSize: fontSize || fonts[variant].size,
        fontWeight: fontWeight || fonts[variant].weight,
        lineHeight: fonts[variant].lineHeight,
        letterSpacing: fonts[variant].letterSpacing,
        color: color || 'inherit',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Typography;
