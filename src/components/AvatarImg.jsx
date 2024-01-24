export default function AvatarImg({ pic, text, style }) {
  return (
    <figure style={style}>
      <img src={pic} alt={text} />
    </figure>
  );
}
