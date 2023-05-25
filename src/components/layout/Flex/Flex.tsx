import { CSSProperties, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  inline?: boolean;
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  justifyContent?: CSSProperties['justifyContent'];
}>;

function Flex({ children, ...props }: Props) {
  return <div css={flexStyle(props)}>{children}</div>;
}

export default Flex;

const flexStyle = ({
  inline = false,
  flexDirection,
  flexWrap,
  alignItems,
  alignContent,
  justifyContent,
}: Omit<Props, 'children'>) => {
  return {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection,
    flexWrap,
    alignItems,
    alignContent,
    justifyContent,
  };
};
