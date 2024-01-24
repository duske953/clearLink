/* eslint-disable react/no-unknown-property */
import { HeroCss } from '../styles/Hero';
import { displayFlex, colors, Heading, utilites } from '../styles/Base';
import { ButtonCss } from '../styles/ButtonLink';
import ButtonLink from './ButtonLink';
import UserReviews from './UserReviews';
import pic2 from '../assets/pictures/animoji (1).svg';
import pic3 from '../assets/pictures/animoji (2).svg';
import pic4 from '../assets/pictures/animoji (3).svg';
import pic5 from '../assets/pictures/animoji (4).svg';
import pic1 from '../assets/pictures/animoji (5).svg';
import pic6 from '../assets/pictures/animoji (6).svg';
import robot from '../assets/icons/robot.svg';
import HeroAvatar from './AvatarImg';
import IconBox from '../components/IconBox';
import micPhone from '../assets/icons/microphone-01.svg';
import vidRec from '../assets/icons/video-recorder.svg';
import monitor from '../assets/icons/monitor-01.svg';
import faceSmile from '../assets/icons/face-smile.svg';
import message from '../assets/icons/message.svg';
import settings from '../assets/icons/settings-01.svg';
export default function Hero() {
  return (
    <section css={HeroCss.HeroContainer}>
      <div>
        <h1 css={[Heading.primaryHeading, utilites.smMarginBtm]}>
          Uniting the world, one video call at a time
        </h1>
        <p css={HeroCss.heroContainer__main__text}>
          Experience the future of communication with ClearLink - where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div
          style={{ paddingBottom: '4rem' }}
          css={displayFlex.flexBox('2rem')}
        >
          <ButtonLink
            style={[
              ButtonCss.reg_button('1.6rem', colors.primaryWhite),
              ButtonCss.styled_button(colors.blue700),
            ]}
          >
            Start your free trial
          </ButtonLink>
          <ButtonLink
            style={[
              ButtonCss.reg_button('1.8rem', colors.blue700),
              displayFlex.flexBox('1.2rem'),
            ]}
          >
            <img src={robot} alt="Image of a robot icon" />
            <span>Discover AI assistant</span>
          </ButtonLink>
        </div>
        <div css={displayFlex.flexBox('1.6rem')}>
          <UserReviews />
        </div>
      </div>
      <div css={HeroCss.heroContainer__img__container}>
        <picture css={HeroCss.heroContainer__img__box}>
          {[pic1, pic2, pic3, pic4, pic5, pic6].map((ele, _) => (
            <HeroAvatar
              text="Image of a character"
              pic={ele}
              key={crypto.randomUUID()}
            />
          ))}
        </picture>
        <div css={displayFlex.flexBox('1rem', 'center')}>
          <IconBox
            color={colors.primaryWhite}
            icon={micPhone}
            alt="Icon of microphone"
          />
          <IconBox
            color={colors.primaryWhite}
            icon={vidRec}
            alt="Icon of video recorder"
          />
          <IconBox
            color={colors.primaryWhite}
            icon={monitor}
            alt="Icon of monitor"
          />
          <IconBox
            color={colors.primaryWhite}
            icon={faceSmile}
            alt="Icon of a smiley face"
          />
          <IconBox
            color={colors.primaryWhite}
            icon={message}
            alt="Icon of a message"
          />
          <IconBox
            color={colors.primaryWhite}
            icon={settings}
            alt="Icons of a setting"
          />
        </div>
      </div>
    </section>
  );
}
