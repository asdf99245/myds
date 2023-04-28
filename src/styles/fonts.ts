interface Font {
  family: string;
  weight: number;
  size: string;
  lineHeight: string;
  letterSpacing: string;
}

export type FontVariant =
  | 'display'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'title'
  | 'subTitle'
  | 'body1'
  | 'body2'
  | 'caption';

export const FONTS: Record<FontVariant, Font> = {
  display: {
    family: 'Pretendard',
    weight: 700,
    size: '50px',
    lineHeight: '65px',
    letterSpacing: '0px',
  },
  heading1: {
    family: 'Pretendard',
    weight: 700,
    size: '40px',
    lineHeight: '52px',
    letterSpacing: '0px',
  },
  heading2: {
    family: 'Pretendard',
    weight: 700,
    size: '36px',
    lineHeight: '47px',
    letterSpacing: '0px',
  },
  heading3: {
    family: 'Pretendard',
    weight: 700,
    size: '32px',
    lineHeight: '42px',
    letterSpacing: '0px',
  },
  heading4: {
    family: 'Pretendard',
    weight: 700,
    size: '28px',
    lineHeight: '36px',
    letterSpacing: '0px',
  },
  heading5: {
    family: 'Pretendard',
    weight: 700,
    size: '24px',
    lineHeight: '31px',
    letterSpacing: '0px',
  },
  title: {
    family: 'Pretendard',
    weight: 700,
    size: '20px',
    lineHeight: '30px',
    letterSpacing: '0px',
  },
  subTitle: {
    family: 'Pretendard',
    weight: 700,
    size: '18px',
    lineHeight: '27px',
    letterSpacing: '0px',
  },
  body1: {
    family: 'Pretendard',
    weight: 400,
    size: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },
  body2: {
    family: 'Pretendard',
    weight: 400,
    size: '14px',
    lineHeight: '21px',
    letterSpacing: '0px',
  },
  caption: {
    family: 'Pretendard',
    weight: 400,
    size: '12px',
    lineHeight: '18px',
    letterSpacing: '0px',
  },
} as const;
