/* eslint-disable react/no-unknown-property */
import ButtonLink from './ButtonLink';
import navIcon from '../assets/icons/navIcon.svg';
import { footerStyles } from '../styles/Footer';
import { ButtonCss } from '../styles/ButtonLink';
import {
  colors,
  displayFlex,
  displayFlexCol,
  Text,
  utilites,
} from '../styles/Base';
import appStore from '../assets/icons/appstore.svg';
import playStore from '../assets/icons/playStore.svg';
import Linkdln from '../assets/icons/linkdin.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Youtube from '../assets/icons/Youtube.svg';
import IconBox from './IconBox';

export default function Footer() {
  return (
    <footer>
      <div css={footerStyles.footerContainer}>
        <div>
          <ButtonLink>
            <img
              css={utilites.mdPaddingBottom}
              src={navIcon}
              alt="Image of company Icon"
            />
          </ButtonLink>

          <p
            style={{ lineHeight: '1.4', width: '85%' }}
            css={Text.primaryText('1.8rem', colors.gray600, 400)}
          >
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div css={footerStyles.footerListContainer}>
          <ul css={displayFlexCol.flexBox('2.4rem')}>
            <p css={Text.primaryText('1.8rem', colors.gray500, 600)}>Product</p>

            {['Overview', 'Features', 'Solutions', 'Tutorials', 'pricing'].map(
              (ele, _) => (
                <li key={crypto.randomUUID()}>
                  <ButtonLink
                    key={crypto.randomUUID()}
                    style={ButtonCss.reg_button('1.4rem', colors.gray600)}
                  >
                    {ele}
                  </ButtonLink>
                </li>
              )
            )}
          </ul>
          <ul css={displayFlexCol.flexBox('2.4rem')}>
            <p css={Text.primaryText('1.8rem', colors.gray500, 600)}>Company</p>
            {['About us', 'Carrers', 'Press', 'News', 'Contact'].map(
              (ele, _) => (
                <li key={crypto.randomUUID()}>
                  <ButtonLink
                    key={crypto.randomUUID()}
                    style={ButtonCss.reg_button('1.4rem', colors.gray600)}
                  >
                    {ele}
                  </ButtonLink>
                </li>
              )
            )}
          </ul>
          <ul css={displayFlexCol.flexBox('2.4rem')}>
            <p css={Text.primaryText('1.8rem', colors.gray500, 600)}>
              Resources
            </p>
            {['Blog', 'Events', 'Help centre', 'Tutorials', 'Support'].map(
              (ele, _) => (
                <li key={crypto.randomUUID()}>
                  <ButtonLink
                    key={crypto.randomUUID()}
                    style={ButtonCss.reg_button('1.4rem', colors.gray600)}
                  >
                    {ele}
                  </ButtonLink>
                </li>
              )
            )}
          </ul>
          <ul css={displayFlexCol.flexBox('2.4rem')}>
            <p css={Text.primaryText('1.8rem', colors.gray500, 600)}>Legal</p>
            {['Terms', 'Privacy', 'Cookies', 'Licenses', 'Contact'].map(
              (ele, _) => (
                <li key={crypto.randomUUID()}>
                  <ButtonLink
                    key={crypto.randomUUID()}
                    style={ButtonCss.reg_button('1.4rem', colors.gray600)}
                  >
                    {ele}
                  </ButtonLink>
                </li>
              )
            )}
          </ul>
          <div css={displayFlexCol.flexBox('1.4rem')}>
            <p css={Text.primaryText('1.4rem', colors.blue700, 600)}>
              Get the app
            </p>
            <img src={appStore} alt="Image of app store" />
            <img src={playStore} alt="Image of app store" />
          </div>
        </div>
      </div>
      <div
        style={{ padding: '1.2rem 5.4rem', backgroundColor: colors.gray50 }}
        css={displayFlex.flexBox('0.2rem', 'space-between')}
      >
        <p css={Text.primaryText('1.4rem', colors.gray500)}>
          © 2023 ClearLink. All rights reserved.
        </p>
        <div css={displayFlex.flexBox('0.6rem')}>
          <ButtonLink>
            <IconBox icon={Linkdln} alt="Icon of Linkdln" />
          </ButtonLink>
          <ButtonLink>
            <IconBox icon={Twitter} alt="Icon of Twitter" />
          </ButtonLink>
          <ButtonLink>
            <IconBox icon={Facebook} alt="Icon of Facebook" />
          </ButtonLink>
          <ButtonLink>
            <IconBox icon={Instagram} alt="Icon of Instagram" />
          </ButtonLink>
          <ButtonLink>
            <IconBox icon={Youtube} alt="Icon of Youtube" />
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
