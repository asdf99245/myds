import { ReactElement, memo } from 'react';
import type { AvatarVariant } from '@@types/variant';
import styled from '@emotion/styled';
import { isArray } from '@utils/type.guard.util';
import { RequiredPick } from '@utils/type.util';
import type { Props as AvatarProps } from './Avatar';
import { AvatarContext } from './context/AvatarContext';

interface Props {
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  variant?: AvatarVariant;
  size?: number;
  max?: number;
}

function AvatarGroup({ children, variant = 'circle', size = 30, max }: Props) {
  if (!children) return null;

  if (max && max < 1) {
    console.error('max props must be greater than 0❗');
    return null;
  }

  if (!isArray(children)) {
    return (
      <AvatarContext.Provider value={{ variant, size }}>
        <AvatarList size={size}>
          <AvatarItem variant={variant}>{children}</AvatarItem>
        </AvatarList>
      </AvatarContext.Provider>
    );
  }

  const elements = children.slice(0, max);
  if (max && children.length > max) {
    elements.push(
      <DummyAvatar variant={variant} size={size}>
        {`${children.length - max}+`}
      </DummyAvatar>,
    );
  }

  return (
    <AvatarContext.Provider value={{ variant, size }}>
      <AvatarList size={size}>
        {elements.map((element, idx) => (
          <AvatarItem key={idx} variant={variant}>
            {element}
          </AvatarItem>
        ))}
      </AvatarList>
    </AvatarContext.Provider>
  );
}

export default AvatarGroup;

const AvatarList = styled.ul<RequiredPick<Props, 'size'>>(({ size }) => ({
  display: 'flex',
  width: 'fit-content',

  li: {
    '&:not(:first-of-type)': {
      marginLeft: `-${size / 10}px`,
    },
  },
}));

const AvatarItem = memo(
  styled.li<RequiredPick<Props, 'variant'>>(({ theme, variant }) => ({
    border: `1px solid ${theme.colors.white}`,
    borderRadius: `${variantBorderRadius[variant]}`,
    width: 'fit-content',
    height: 'fit-content',
    overflow: 'hidden',
  })),
);

const DummyAvatar = styled.div<RequiredPick<Props, 'variant' | 'size'>>(({ theme, variant, size }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: `${theme.colors.grey200}`,
  color: `${theme.colors.white}`,
  fontSize: `${size / 3}px`,
  letterSpacing: '-5%',
  overflow: 'hidden',
  borderRadius: `${variantBorderRadius[variant]}`,
}));

const variantBorderRadius = {
  circle: '50%',
  square: '0',
  rounded: '20%',
};
