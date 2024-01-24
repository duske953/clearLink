/* eslint-disable react/no-unknown-property */
import chevronDown from '../assets/icons/chevron-down.svg';
import navIcon from '../assets/icons/navIcon.svg';

import ButtonLink from './ButtonLink';
import { nav } from '../styles/Navbar';
import { ButtonCss } from '../styles/ButtonLink';
import { colors } from '../styles/Base';
import { displayFlex } from '../styles/Base';

export default function NavBar() {
  return (
    <nav css={nav.container}>
      <ButtonLink>
        <img src={navIcon} alt="Image of company Icon" />
      </ButtonLink>
      <ul css={nav.container__list__box}>
        {['Products', 'Solutions', 'Resources', 'Pricing'].map((item, _) => {
          return (
            <li css={nav.container__list} key={crypto.randomUUID()}>
              <ButtonLink style={ButtonCss.reg_button()}>
                <span>{item}</span>{' '}
                {item === 'Pricing' ? (
                  ''
                ) : (
                  <img src={chevronDown} alt="Arrow pointing down" />
                )}
              </ButtonLink>
            </li>
          );
        })}
      </ul>
      <div css={displayFlex.flexBox('0.4rem')}>
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
          Sign up for free
        </ButtonLink>
      </div>
    </nav>
  );
}
