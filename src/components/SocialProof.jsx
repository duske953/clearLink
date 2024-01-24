/* eslint-disable react/no-unknown-property */
import Shopify from '../assets/icons/Shopify.svg';
import coinBase from '../assets/icons/Coinbase.svg';
import dropBox from '../assets/icons/Dropbox.svg';
import interCom from '../assets/icons/Intercom.svg';
import marvel from '../assets/icons/Marvel.svg';
import Automattic from '../assets/icons/Automattic.svg';
import { socialProofStyles } from '../styles/SocialProof';
import { colors, displayFlex, Heading, utilites } from '../styles/Base';
import { Text } from '../styles/Base';
import vidRec from '../assets/icons/video-recorder.svg';
import calendar from '../assets/icons/calendar.svg';
import recording from '../assets/icons/recording.svg';
import Lock from '../assets/icons/lock.svg';
import Rectangle from '../assets/icons/Rectangle.svg';
import Hand from '../assets/icons/Hand.svg';
import IconBox from './IconBox';

function SocialFeatures({ icon, heading, text }) {
  return (
    <div>
      <IconBox
        dimension="5rem"
        icon={icon}
        alt="Icon img"
        color={colors.gray50}
      />
      <p
        style={{ paddingBottom: '1.2rem', paddingTop: '1.2rem' }}
        css={Text.primaryText('2.4rem', colors.gray900, 600)}
      >
        {heading}
      </p>
      <p
        style={{ lineHeight: '2.8rem' }}
        css={Text.primaryText('1.8rem', colors.gray600, 400)}
      >
        {text}
      </p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section style={{ padding: '4.4rem' }}>
      <div css={socialProofStyles.socialProofContainer}>
        <p>
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div css={displayFlex.flexBox('2.4rem')}>
          <img src={Shopify} alt="Image of shopify Icon" />
          <img src={coinBase} alt="Image of coinBase" />
          <img src={dropBox} alt="Image of dropBox" />
          <img src={interCom} alt="Image of Intercom" />
          <img src={marvel} alt="Image of Marvel" />
          <img src={Automattic} alt="Image of Automattic" />
        </div>
      </div>
      <div>
        <span
          style={{ display: 'block', paddingBottom: '1.8rem' }}
          css={[Text.primaryText('1.8rem', colors.blue700, 600)]}
        >
          The clearLink Advantage
        </span>
        <h2 css={[Heading.secondaryHeading, utilites.smMarginBtm]}>
          Why choose clearLink?
        </h2>
        <p
          style={{ width: '60%', lineHeight: '1.4', paddingBottom: '3.4rem' }}
          css={Text.primaryText('2.4rem', colors.gray500, 400)}
        >
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
        <div css={socialProofStyles.socialFeaturesBox}>
          <div css={socialProofStyles.socialFeaturesContainer}>
            <SocialFeatures
              icon={vidRec}
              heading="Crystal-clear HD video"
              text="No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."
            />
            <SocialFeatures
              icon={calendar}
              heading="Scheduling made easy"
              text="Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
            />
            <SocialFeatures
              icon={recording}
              heading="Noise-canceling audio"
              text="Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."
            />
            <SocialFeatures
              icon={Lock}
              heading="Bank-grade security"
              text="Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img
              style={{
                position: 'absolute',
                zIndex: 10,
                top: '-38%',
                left: '11%',
              }}
              src={Hand}
              alt="Icon of a hand arrow"
            />
            <img
              alt="Image of a group of people"
              style={{ transform: `scale(0.9)` }}
              src={Rectangle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
