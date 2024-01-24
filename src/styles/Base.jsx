import { css } from '@emotion/react';

export const colors = {
  gray50: '#F9FAFB',
  gray100: '#F2F4F7',
  gray300: '#D0D5DD',
  gray400: '#98A2B3',
  gray500: '#667085',
  gray600: '#475467',
  gray700: '#344054',
  gray800: '#1D2939',
  gray900: '#101828',
  blue50: '#EFF8FF',
  blue100: '#D1E9FF',
  blue200: '#B2DDFF',
  blue700: '#175CD3',
  primaryWhite: '#FFFFFF',
};

export const pagePadding = {
  mainPadding: css({
    padding: '4rem 2rem',
  }),
};

export const Heading = {
  primaryHeading: css({
    fontSize: '5.4rem',
    fontWeight: 600,
    color: colors.gray800,
  }),

  secondaryHeading: css({
    fontSize: '4rem',
    fontWeight: '600',
    letterSpacing: '-0.96px',
  }),
};

export const Text = {
  primaryText: (size = '1rem', color = colors.primaryWhite, weight = 500) => {
    return css({
      fontSize: size,
      color,
      fontWeight: weight,
    });
  },
};

export const displayFlex = {
  flexBox: (gap = '1rem', justify = 'intital') => {
    return css({
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: justify,
      gap,
    });
  },
};

export const displayFlexCol = {
  flexBox: (gap = '1rem', justify = 'intital', align = 'flex-start') => {
    return css({
      display: 'flex !important',
      justifyContent: justify,
      alignItems: align,
      gap,
      flexDirection: 'column',
    });
  },
};

export const utilites = {
  smMarginBtm: css({
    marginBottom: '1.4rem',
  }),
  displayBk: css({
    display: 'block',
  }),
  mdPaddingBottom: css({
    paddingBottom: '4rem',
  }),
};
