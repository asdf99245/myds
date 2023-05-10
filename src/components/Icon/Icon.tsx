import { CSSProperties } from 'react';
import * as icons from 'src/assets/icons';

type IconType = keyof typeof icons;

interface Props {
  icon: IconType;
  color?: CSSProperties['color'];
  size?: string | number;
}

function Icon({ icon, color, size }: Props) {
  /*eslint import/namespace: ['error', { allowComputed: true }]*/
  const SVGIcon = icons[icon];

  return <SVGIcon css={{ fill: color || 'currentColor', width: size, height: 'auto' }} />;
}

export default Icon;
