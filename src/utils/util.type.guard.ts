import { ReactNode } from 'react';

export const isArray = (target: ReactNode | ReactNode[]): target is Array<ReactNode> => {
  return Array.isArray(target);
};
