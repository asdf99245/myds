import { ReactNode } from 'react';
import { getInitials } from '@utils/getInitials';
import { Icon } from '@components/Icon';

interface Params {
  imgsrc?: string;
  icon?: ReactNode;
  name?: string;
  size: number;
}

function useAvatarContents({ imgsrc, icon, name, size }: Params) {
  if (imgsrc) return null;

  if (icon) return icon;

  if (name) return getInitials(name);

  const adjustedSize = (size * 4) / 5;
  return <Icon icon='user' size={adjustedSize} color='white' />;
}

export default useAvatarContents;
