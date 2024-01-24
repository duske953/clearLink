import { css } from '@emotion/react';
import { colors } from './Base';

export const FaqCss = {
  faqContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    padding: '9.6rem 5.4rem',
    gap: '4rem',
  }),
  faqListActive: css({
    backgroundColor: colors.gray50,
    borderRadius: '16px',
    padding: '2.4rem',
  }),

  faqListBox: css({
    '& div:nth-of-type(n + 2):not(:last-of-type)': {
      borderBottom: `1px solid ${colors.gray400}`,
      paddingBottom: '1.2rem',
    },
  }),
};
