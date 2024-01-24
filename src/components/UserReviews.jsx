/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react';
import avatar1 from '../assets/pictures/Avatar (1).svg';
import avatar2 from '../assets/pictures/Avatar (2).svg';
import avatar3 from '../assets/pictures/Avatar (3).svg';
import avatar4 from '../assets/pictures/Avatar (4).svg';
import avatar5 from '../assets/pictures/Avatar (5).svg';
import star from '../assets/icons/Star.svg';
import { colors, displayFlex } from '../styles/Base';
const userReviewsStyles = {
  userReviewsBox: css({
    '& img': {
      marginLeft: '-8px',
    },
    '& img:first-child': {
      marginLeft: '0',
    },
  }),
};

export default function UserReviews() {
  return (
    <>
      <div css={userReviewsStyles.userReviewsBox}>
        <img src={avatar1} alt="Image of a man" />
        <img src={avatar2} alt="Image of a man" />
        <img src={avatar3} alt="Image of a woman" />
        <img src={avatar4} alt="Image of a man" />
        <img src={avatar5} alt="Image of a man" />
      </div>
      <div>
        <div
          style={{ marginBottom: '0.8rem' }}
          css={displayFlex.flexBox('0.4rem')}
        >
          {Array.from({ length: 5 }).map((ele, i) => (
            <img src={star} alt="Icon of a star" key={crypto.randomUUID()} />
          ))}
          <span
            style={{
              fontSize: '1.6rem',
              fontWeight: '600',
              color: colors.gray700,
            }}
          >
            5.0
          </span>
        </div>
        <span
          style={{
            fontSize: '1.6rem',
            fontWeight: '500',
            color: colors.gray600,
          }}
        >
          from 3,000+ reviews
        </span>
      </div>
    </>
  );
}
