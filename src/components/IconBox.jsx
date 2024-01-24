/* eslint-disable react/no-unknown-property */
import { iconStyles } from '../styles/IconBox';
export default function IconBox({ icon, alt, color, style, dimension }) {
  return (
    <div style={style} css={iconStyles.iconContainer(color, dimension)}>
      <img src={icon} alt={alt} />
    </div>
  );
}
