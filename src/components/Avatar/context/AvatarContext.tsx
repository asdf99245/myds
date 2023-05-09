import { createContext } from 'react';
import type { AvatarVariant } from '@@types/variant';

export interface AvatarContextType {
  variant: AvatarVariant;
  size: number;
}

export const AvatarContext = createContext<AvatarContextType | null>(null);
