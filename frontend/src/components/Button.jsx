export default function Button({ onClick, text, color }) {
  return (
    <>
      <button style={{ background: color }} className="btn" onClick={onClick}>
        {text}
      </button>

      <style jsx>{`
        .btn {
          background: gray;
          color: white;
          font-size: 1.2rem;
          border: gray;
          cursor: pointer;
          width: 6rem;
          border: 1px solid #444;
          font-size: 2rem;
          height: 6rem;
        }
        .btn:hover {
          background: #444;
        }
      `}</style>
    </>
  );
}
