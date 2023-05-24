import { CSSProperties } from 'react';
import { Box } from '@components/layout/Box';

interface Props {
  inline?: boolean;
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  justifyContent?: CSSProperties['justifyContent'];
}

function Flex(props: Props) {
  return <Box style={flexStyle(props)}>Flex</Box>;
}

export default Flex;

const flexStyle = ({
  inline = false,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  alignItems,
  alignContent,
  justifyContent,
}: Props) => {
  return {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection,
    flexWrap,
    alignItems,
    alignContent,
    justifyContent,
  };
};
