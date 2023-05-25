import { CSSProperties } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  size?: number;
  thick?: number;
  color?: CSSProperties['color'];
  speed?: `${number}s`;
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<Props>`
  border: ${(props) => (props.thick ? `${props.thick}px` : '2px')} solid
    ${(props) => props.color || props.theme.colors.primary};
  border-top-color: ${(props) => props.theme.colors.grey100};
  border-right-color: ${(props) => props.theme.colors.grey100};
  border-radius: 50%;

  width: ${(props) => (props.size ? `${props.size}px` : '20px')};
  height: ${(props) => (props.size ? `${props.size}px` : '20px')};

  animation: ${rotation} ${(props) => props.speed || '0.75s'} linear infinite;
`;

export default Spinner;
