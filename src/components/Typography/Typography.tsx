import { CSSProperties, ElementType } from 'react';
import { useTheme } from '@emotion/react';
import { FontVariant } from '@styles/fonts';
import { PolymorphicProps } from '@utils/type.util';

interface TypographyProps {
  variant?: FontVariant;
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
}

type Props<T extends ElementType> = PolymorphicProps<TypographyProps, T>;

function Typography<T extends ElementType = 'p'>({
  as,
  children,
  variant = 'body1',
  fontSize,
  fontWeight,
  color,
  ...props
}: Props<T>) {
  const Component = as || variantMapping[variant] || 'p';
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
