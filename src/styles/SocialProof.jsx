import { css } from '@emotion/react';
import { colors } from './Base';

export const socialProofStyles = {
  socialProofContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    alignItems: 'center',
    paddingTop: '6.4rem',
    paddingBottom: '20rem',

    '& p': {
      color: colors.gray600,
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: '3rem',
    },
  }),
  socialFeaturesContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '2rem 3rem',
  }),

  socialFeaturesBox: css({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '2.4rem',
  }),
};
