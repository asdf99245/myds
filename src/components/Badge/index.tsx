import { CSSProperties, ReactNode } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { formatBadgeLabel } from '@utils/formatBadgeLabel';

interface Props {
  children?: ReactNode;
  label?: string | number;
  color?: CSSProperties['color'];
  dot?: boolean;
  showZero?: boolean;
}

function Badge({ children, label, color, dot = false, showZero = false }: Props) {
  const { colors } = useTheme();

  const styles = {
    base: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${String(label).length === 1 ? '16px' : 'fit-content'};
      height: 16px;
      background-color: ${color || colors.primary};
      color: ${colors.white};
      padding: 0px 4px;
      font-size: 12px;
      border-radius: 8px;
      whitespace: nowrap;
      overflow: hidden;
    `,
    position: css`
      position: absolute;
      bottom: 100%;
      left: 100%;
      transform: translate(-50%, 50%);
    `,
    zero: css`
      display: ${label === 0 ? 'none' : 'flex'};
    `,
    dot: css`
      width: 6px;
      height: 6px;
      padding: 0;
    `,
  };

  return (
    <BadgeWrapper>
      {children}
      {(dot || label !== undefined) && (
        <div css={[styles.base, children && styles.position, !showZero && styles.zero, dot && styles.dot]}>
          {!dot && label && formatBadgeLabel(label)}
        </div>
      )}
    </BadgeWrapper>
  );
}

export default Badge;

const BadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
