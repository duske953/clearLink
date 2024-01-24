/* eslint-disable react/no-unknown-property */
import { FaqCss } from '../styles/Faq';
import {
  colors,
  displayFlex,
  displayFlexCol,
  Text,
  utilites,
} from '../styles/Base';
import minusCircle from '../assets/icons/minus-circle.svg';
import plusCircle from '../assets/icons/plus-circle.svg';
function FaqList({ text }) {
  return (
    <div
      style={{ width: '100%' }}
      css={[displayFlex.flexBox('0.2rem', 'space-between'), FaqCss.faqListItem]}
    >
      <p style={{}} css={Text.primaryText('1.6rem', colors.gray900, 600)}>
        {text}
      </p>
      <img src={plusCircle} alt="Icons of a minus circle" />
    </div>
  );
}

export default function Faq() {
  return (
    <section css={FaqCss.faqContainer}>
      <div>
        <div css={displayFlexCol.flexBox('1.4rem')}>
          <p css={Text.primaryText('1.8rem', colors.blue700, 600)}>Support</p>
          <p css={Text.primaryText('4.8rem', colors.gray800, 600)}>Faqs</p>
          <p
            style={{ lineHeight: '1.4' }}
            css={Text.primaryText('2.4rem', colors.gray500, 400)}
          >
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
      </div>
      <div css={[displayFlexCol.flexBox('4rem'), FaqCss.faqListBox]}>
        <div css={FaqCss.faqListActive}>
          <p
            style={{ lineHeight: '1.4' }}
            css={[
              Text.primaryText('2rem', colors.gray900, 600),
              utilites.smMarginBtm,
              displayFlex.flexBox('1rem'),
            ]}
          >
            How many participants can join a ClearLink video conference?
            <span style={{ alignSelf: 'baseline' }}>
              <img src={minusCircle} alt="Icon of a minus-circle" />
            </span>
          </p>
          <p
            style={{ lineHeight: '2.6rem' }}
            css={Text.primaryText('1.8rem', colors.gray600, 400)}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <FaqList text="Can i use ClearLink on multiple devices" />
        <FaqList text="Is ClearLink compatible with other video conferencing platforms?" />
        <FaqList text="How does ClearLink ensure the security of my video conferences?" />
        <FaqList text="Do I need to download any software to use ClearLink?" />
        <FaqList text="What kind of customer support does ClearLink provide?" />
      </div>
    </section>
  );
}
