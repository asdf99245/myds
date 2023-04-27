export type SpacingVariant = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

export const SPACING: Record<SpacingVariant, string> = {
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  56: '3.5rem',
  64: '4rem',
} as const;
