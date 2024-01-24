import { css } from '@emotion/react';
import { colors } from './Base';
import bgImg from '../assets/icons/ken.jpg';
export const HeroCss = {
  mainSection: css({
    position: 'relative',
    '&::before': {
      content: '""',
      background: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '76% 130%',
      position: 'absolute',
      right: 0,
      top: 0,
      display: 'flex',
      width: '100%',
      height: '100%',
      zIndex: '-1',
      opacity: '0.45',
    },
  }),

  HeroContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    padding: '0 2.4rem',
    justifyContent: 'center',
    gap: '4rem',
  }),
  heroContainer__main__text: css({
    fontSize: '2.4rem',
    color: colors.gray500,
    lineHeight: '3.2rem',
    paddingBottom: '2.4rem',
  }),

  heroContainer__img__container: css({
    backgroundColor: colors.blue50,
    border: `1px solid ${colors.blue200}`,
    padding: '3.2rem',
    borderRadius: '1.6rem',
  }),

  heroContainer__img__box: css({
    display: 'grid',
    gridTemplateColumns: `repeat(3,fit-content(5%))`,
    boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    justifyContent: 'center',
    gap: '4rem',
    borderRadius: '1.6rem',
    marginBottom: '2rem',
  }),
};
