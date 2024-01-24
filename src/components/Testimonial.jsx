/* eslint-disable react/no-unknown-property */
import Shopify from '../assets/icons/Shopify.svg';
import star from '../assets/icons/Star.svg';
import Avatar6 from '../assets/icons/Avatar (6).svg';
import Image1 from '../assets/pictures/Image (1).svg';
import Image2 from '../assets/pictures/Image (2).svg';
import Image3 from '../assets/pictures/Image (3).svg';
import Image4 from '../assets/pictures/Image (4).svg';
import Image5 from '../assets/pictures/Image (5).svg';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import {
  utilites,
  Text,
  colors,
  displayFlexCol,
  displayFlex,
} from '../styles/Base';
import { TestimonialCss } from '../styles/Testimonial';
import AvatarImg from './AvatarImg';
import IconBox from './IconBox';
export default function Testimonial() {
  return (
    <section css={[TestimonialCss.testimonialContainer]}>
      <div css={displayFlexCol.flexBox()}>
        <div css={displayFlexCol.flexBox('5.4rem')}>
          <img
            css={utilites.displayBk}
            src={Shopify}
            alt="Image of shopify Icon"
          />
          <div>
            {Array.from({ length: 5 }).map(() => (
              <img src={star} alt="Icon of a star" key={crypto.randomUUID()} />
            ))}
          </div>
          <p
            style={{ lineHeight: '1.4' }}
            css={[
              Text.primaryText('3.4rem', colors.gray900, '500'),
              utilites.mdPaddingBottom,
            ]}
          >
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>
        </div>
        <div
          style={{ width: '90%' }}
          css={displayFlex.flexBox('0.2rem', 'space-between')}
        >
          <div css={displayFlex.flexBox()}>
            <img src={Avatar6} alt="Image of a woman" />
            <p css={displayFlexCol.flexBox('0.6rem')}>
              <span css={Text.primaryText('2rem', colors.gray900, '600')}>
                Sarah Thompmson
              </span>
              <span css={Text.primaryText('1.8rem', colors.gray600, 400)}>
                Project Manager, Shopify
              </span>
            </p>
          </div>
          <div>
            <div css={displayFlex.flexBox('1.4rem')}>
              <IconBox
                style={{ border: `1px solid ${colors.blue100}` }}
                color={colors.primaryWhite}
                dimension="6rem"
                icon={arrowLeft}
                alt="arrow icon pointing to the left"
              />
              <IconBox
                style={{ border: `1px solid ${colors.blue100}` }}
                color={colors.primaryWhite}
                dimension="6rem"
                icon={arrowRight}
                alt="arrow icon pointing to the left"
              />
            </div>
          </div>
        </div>
      </div>
      <picture css={displayFlexCol.flexBox('1rem', 'initial', 'initial')}>
        <div
          style={{ justifyContent: 'center' }}
          css={displayFlex.flexBox('0.8rem')}
        >
          <AvatarImg
            style={{ alignSelf: 'flex-end' }}
            pic={Image1}
            text="Image of a boy"
          />
          <AvatarImg pic={Image2} text="Image of a boy using his computer" />
        </div>
        <div css={displayFlex.flexBox('0.8rem')}>
          <AvatarImg
            style={{ alignSelf: 'flex-start' }}
            pic={Image3}
            text="Image of people brainstorming"
          />
          <AvatarImg pic={Image4} text="Image of two girls" />
          <AvatarImg
            style={{ alignSelf: 'flex-start' }}
            pic={Image5}
            text="Image of a computer"
          />
        </div>
      </picture>
    </section>
  );
}
