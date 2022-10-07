export default function Button({ onClick, text, color, cls }) {
  return (
    <>
      <button
        style={{ background: color }}
        className={"btn " + cls}
        onClick={onClick}>
        {text}
      </button>
    </>
  );
}
