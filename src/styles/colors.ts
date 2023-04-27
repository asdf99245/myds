const PALETTE = {
  /* purple */
  purple50: '#F1EDFD',
  purple100: '#DDD3F9',
  purple200: '#C2B0F5',
  purple300: '#A58CF1',
  purple400: '#8A69EC',
  purple500: '#7048E8',
  purple600: '#5F3DC5',
  purple700: '#5033A5',
  purple800: '#402984',
  purple900: '#322068',

  /* blue */
  blue50: '#EDF1FD',
  blue100: '#D3DDF9',
  blue200: '#B0C2F5',
  blue300: '#8CA5F1',
  blue400: '#698AEC',
  blue500: '#4870E8',
  blue600: '#3D5FC5',
  blue700: '#3350A5',
  blue800: '#294084',
  blue900: '#203268',

  /* greyscale */
  grey50: '#F2F2F2',
  grey100: '#DFDFDF',
  grey200: '#C6C6C6',
  grey300: '#ABABAB',
  grey400: '#929292',
  grey500: '#7A7A7A',
  grey600: '#686868',
  grey700: '#575757',
  grey800: '#464646',
  grey900: '#373737',

  /* black & white */
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const COLORS = {
  /* primary */
  primary: PALETTE.purple500,
  primaryLight: PALETTE.purple400,
  primaryDark: PALETTE.purple600,

  /* secondary */
  secondary: PALETTE.blue500,
  secondaryLight: PALETTE.blue400,
  seconaryDark: PALETTE.blue600,

  /* black & white */
  black: PALETTE.black,
  white: PALETTE.white,

  /* greyscale */
  grey50: PALETTE.grey50,
  grey100: PALETTE.grey100,
  grey200: PALETTE.grey200,
  grey300: PALETTE.grey300,
  grey400: PALETTE.grey400,
  grey500: PALETTE.grey500,
  grey600: PALETTE.grey600,
  grey700: PALETTE.grey700,
  grey800: PALETTE.grey800,
  grey900: PALETTE.grey900,
} as const;
