import { css } from '@emotion/react';
import { colors } from './Base';

export const ButtonCss = {
  reg_button: (size = '1.8rem', color = colors.gray500) => {
    return css({
      fontSize: size,
      fontWeight: '600',
      color,
    });
  },

  styled_button: (bgColor, brCol = '#fff') => {
    return css({
      backgroundColor: bgColor,
      borderRadius: '100px',
      padding: '1.4rem 2.4rem',
      border: `1px solid ${brCol}`,
    });
  },
};
