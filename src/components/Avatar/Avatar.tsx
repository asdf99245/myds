import { CSSProperties, ReactNode, useContext } from 'react';
import { AvatarVariant } from '@@types/variant';
import { css, useTheme } from '@emotion/react';
import useAvatarContents from '@hooks/useAvatarContents';
import { AvatarContext } from './context/AvatarContext';

export interface Props {
  variant: AvatarVariant;
  size?: number;
  color?: CSSProperties['color'];
  imgsrc?: string;
  name?: string;
  icon?: ReactNode;
}

function Avatar({ variant, size = 30, color, imgsrc, name, icon }: Props) {
  const { colors } = useTheme();
  const avatarContext = useContext(AvatarContext);

  if (avatarContext) {
    variant = avatarContext.variant;
    size = avatarContext.size;
  }

  const styles = {
    base: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${size}px;
      height: ${size}px;
      background-color: ${color || colors.grey200};
      color: ${colors.white};
      font-size: ${size / 3}px;
      letter-spacing: -5%;
      overflow: hidden;
    `,
    circle: css`
      border-radius: 50%;
    `,
    square: css`
      border-radius: 0;
    `,
    rounded: css`
      border-radius: 20%;
    `,
    bgImage: css`
      background-image: url(${imgsrc});
      background-repeat: no-repeat;
      background-size: contain;
    `,
  };

  const contents = useAvatarContents({ imgsrc, icon, name, size });

  return <div css={[styles.base, styles[variant], imgsrc && styles.bgImage]}>{contents}</div>;
}

export default Avatar;
