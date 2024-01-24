import { css } from '@emotion/react';

export const footerStyles = {
  footerContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    padding: '9.6rem 5.4rem',
  }),

  footerListContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gap: '4.5rem',
  }),
};
