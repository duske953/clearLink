import { css } from '@emotion/react';

export const iconStyles = {
  iconContainer: (bgColor = 'transparent', dimension = '4rem') => {
    return css({
      backgroundColor: bgColor,
      padding: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100px',
      height: dimension,
      width: dimension,
      cursor: 'pointer',
    });
  },
};
