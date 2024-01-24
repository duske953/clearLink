/* eslint-disable react/no-unknown-property */
import checkIcon from '../assets/icons/Check icon.svg';
import mockup from '../assets/pictures/mockup.svg';
import { colors, displayFlex, Heading, Text, utilites } from '../styles/Base';
import IconBox from './IconBox';
import ButtonLink from './ButtonLink';
import { ButtonCss } from '../styles/ButtonLink';
import { CtaStyles } from '../styles/Cta';

function TestimonialList({ text }) {
  return (
    <li
      css={[
        displayFlex.flexBox('0.6rem'),
        Text.primaryText('1.8rem', colors.gray600),
      ]}
    >
      <IconBox icon={checkIcon} alt="color of check icon" />
      <span>{text}</span>
    </li>
  );
}

export default function Cta() {
  return (
    <section css={CtaStyles.ctaContainer}>
      <div>
        <h2
          style={{ lineHeight: '1.2', color: colors.gray900 }}
          css={[Heading.secondaryHeading, utilites.smMarginBtm]}
        >
          Ready to clear the path to perfect communication?
        </h2>
        <ul css={utilites.smMarginBtm}>
          <TestimonialList text="30 days free trial" />
          <TestimonialList text="Cancel at any time" />
          <TestimonialList text="Access to all features" />
          <TestimonialList text="Personalized onboarding" />
        </ul>
        <div css={[displayFlex.flexBox('0.6rem')]}>
          <ButtonLink
            style={[
              ButtonCss.reg_button('1.6rem', colors.gray900),
              ButtonCss.styled_button('#fff', colors.gray400),
            ]}
          >
            Talk to Sales
          </ButtonLink>
          <ButtonLink
            style={[
              ButtonCss.reg_button('1.6rem', colors.primaryWhite),
              ButtonCss.styled_button(colors.blue700),
            ]}
          >
            Start your free trial
          </ButtonLink>
        </div>
      </div>
      <div>
        <img
          style={{ width: '100%' }}
          src={mockup}
          alt="Image representing video conferencing"
        />
      </div>
    </section>
  );
}
