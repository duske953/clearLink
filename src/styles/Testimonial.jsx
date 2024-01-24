import { css } from '@emotion/react';
import { colors } from './Base';

export const TestimonialCss = {
  testimonialContainer: css({
    backgroundColor: colors.gray50,
    padding: '9.6rem 5.4rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '2.6rem',
  }),
};
