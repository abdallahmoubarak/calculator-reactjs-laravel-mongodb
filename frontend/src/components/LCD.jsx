export default function LCD({ value }) {
  return (
    <>
      <div className="lcd">
        <input placeholder="0" value={value} />
      </div>
      <style jsx>{`
        .lcd {
          background: #532;
          width: 60rem;
          margin: auto;
        }
        input {
          background: transparent;
          border: none;
          padding: 0.5rem;
          padding-top: 3rem;
          font-size: 3rem;
          color: white;
          direction: rtl;
          width: 100%;
        }
        input::placeholder {
          color: #eee;
        }
      `}</style>
    </>
  );
}
