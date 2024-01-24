import { css } from '@emotion/react';
import { colors } from './Base';

export const nav = {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.gray100,
    border: `1px solid ${colors.gray300}`,
    padding: '1.6rem 3.2rem',
    borderRadius: '100px',
    marginBottom: '8.4rem',
  }),
  container__list__box: css({
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
  }),
  container__list: css({
    '& a:link, & a:visited': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
    },
  }),
};
