/* eslint-disable react/prop-types */
export default function ButtonLink({ children, to = '#', style }) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <a css={style} href={to}>
      {children}
    </a>
  );
}
